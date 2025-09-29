import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

// Get Gemini Flash model (most generous free tier)
export const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash" 
});

// Helper function to generate educational content
export async function generateEducationalContent(
  topic: string,
  level: string,
  contentType: 'lesson' | 'quiz' | 'summary'
) {
  try {
    const prompts = {
      lesson: `Create an engaging educational lesson about "${topic}" for ${level} level students. 
               Include: introduction, main concepts, examples, and conclusion.
               Format the response in markdown.`,
      quiz: `Create a quiz with 5 multiple-choice questions about "${topic}" for ${level} level students. 
             Format as JSON with structure: {questions: [{question, options: [a,b,c,d], correct: 'letter'}]}`,
      summary: `Create a concise summary about "${topic}" suitable for ${level} level students. 
                Maximum 200 words, highlighting key points.`
    };

    const result = await model.generateContent(prompts[contentType]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('AI generation error:', error);
    throw error;
  }
}