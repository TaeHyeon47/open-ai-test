import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * ChatGPT API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @returns ChatGPT의 응답
 */
export const getChatGPTResponse = async (question: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 또는 "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content: "You are a helpful customer support assistant.",
        },
        { role: "user", content: question },
      ],
      max_tokens: 100,
    });

    return (
      response.choices[0]?.message?.content || "답변을 생성할 수 없습니다."
    );
  } catch (error) {
    console.error("ChatGPT API 호출 오류:", error);
    throw new Error("ChatGPT API 요청 실패");
  }
};
