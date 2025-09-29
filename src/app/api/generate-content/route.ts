import { NextRequest, NextResponse } from 'next/server';
import { generateEducationalContent } from '@/lib/ai/gemini';

export async function POST(request: NextRequest) {
  try {
    const { topic, level, contentType } = await request.json();
    
    const content = await generateEducationalContent(topic, level, contentType);
    
    return NextResponse.json({ content });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}