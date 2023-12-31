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
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt
        }
      }
    );

    // Increase API limit for user
    await increaseApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.error("[MUSIC_ERROR]", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
