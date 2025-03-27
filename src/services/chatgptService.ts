import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * ChatGPT API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @returns ChatGPT의 응답
 */
export const getChatGPTResponse = async (question: string): Promise<string> => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4", // 또는 "gpt-3.5-turbo"
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
      response.data.choices[0].message?.content || "답변을 생성할 수 없습니다."
    );
  } catch (error) {
    console.error("ChatGPT API 호출 오류:", error);
    throw new Error("ChatGPT API 요청 실패");
  }
};
