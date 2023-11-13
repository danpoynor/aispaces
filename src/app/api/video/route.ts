import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';

const token = process.env.REPLICATE_API_TOKEN;

if (!token) {
  throw new Error("REPLICATE_API_TOKEN is not defined");
}

const replicate = new Replicate({
  auth: token,
});

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    // Check if user is still on free trial
    const freeTrial = await checkApiLimit();

    // If user is not on free trial, return 403
    if (!freeTrial) {
      return new NextResponse('Free trial limit reached', { status: 403 });
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt
        }
      }
    );

    // Increase API limit for user
    await increaseApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.error("[VIDEO_ERROR]", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
