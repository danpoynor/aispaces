import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    // Check if user is still on free trial
    const freeTrial = await checkApiLimit();

    // If user is not on free trial, return 403
    if (!freeTrial) {
      return new NextResponse('Free trial limit reached', { status: 403 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });

    // Increase API limit for user
    await increaseApiLimit(userId);

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
