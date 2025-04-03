import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

/**
 * Deepseek API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @param modelName 사용할 모델 이름
 * @returns Gemini API 응답
 */
export const getDeepseekResponse = async (
  question: string,
  modelName: string = "deepseek-chat"
): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: question }],
      model: modelName,
    });

    return (
      completion.choices[0].message.content || "답변을 생성할 수 없습니다."
    );
  } catch (error) {
    console.error("Deepseek API 호출 오류:", error);
    throw new Error("Deepseek API 요청 실패");
  }
};
