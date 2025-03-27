import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const geminiAi = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

/**
 * Google Gemini API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @returns Gemini API 응답
 */

export const getGeminiResponse = async (question: string): Promise<string> => {
  try {
    const response = await geminiAi.models.generateContent({
      model: "gemini-2.0-flash",
      contents: question,
    });

    return response.text || "답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API 호출 오류:", error);
    throw new Error("Gemini API 요청 실패");
  }
};
