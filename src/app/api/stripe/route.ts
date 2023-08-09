import { auth, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'
import { stripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'

const settingsUrl = absoluteUrl('/settings')

export async function GET() {
  try {
    const { userId } = auth()
    const user = await currentUser()

    if (!user || !userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: { userId },
    })

    // Event 1: User has a Stripe subscription
    // If we have a Stripe subscription, do the billing portal
    // Here we are either upgrading or canceling the subscription
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      })

      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    }

    // Event 2: User does not have a Stripe subscription yet
    // If we don't have a Stripe subscription
    // Do the checkout session
    // Here we are creating a new subscription (first time billing)
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ['card'],
      mode: 'subscription',
      billing_address_collection: 'auto',
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'AiSpaces Pro',
              description: 'Unlimited AI Generation',
            },
            unit_amount: 2000,
            recurring: {
              interval: 'month',
            }
          },
          quantity: 1,
        }
      ],
      metadata: {
        userId,
      },
    })

    return new NextResponse(JSON.stringify({ url: stripeSession.url }))

  } catch (error) {
    console.error('[STRIPE_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
