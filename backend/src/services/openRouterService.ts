import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

/**
 * OpenRouter API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @param modelName 사용할 모델 이름
 * @returns OpenRouter API 응답
 */
export const getOpenRouterResponse = async (
  question: string = "안녕하세요",
  modelName: string = "qwen/qwq-32b:free"
): Promise<string> => {
  console.log("Request Question", question);
  console.log("Request ModelName", modelName);

  try {
    const completion = await openai.chat.completions.create({
      model: modelName,
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });
    //
    console.log("completion", completion);

    return (
      completion.choices[0].message.content || "답변을 생성할 수 없습니다."
    );
  } catch (error) {
    console.error("OpenRouter API 호출 오류:", error);
    throw new Error("OpenRouter API 요청 실패");
  }
};
