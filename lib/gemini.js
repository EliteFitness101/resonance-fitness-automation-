import { GenerativeModel, GoogleGenerativeAI } from "@google/generativeai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateWorkout = async (userStats) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `As Coach B2K for ResoFlex, generate a 7-day plan for: ${userStats}. Focus on local Nigerian meals.`;
  
  const result = await model.generateContent(prompt);
  return result.response.text();
};
