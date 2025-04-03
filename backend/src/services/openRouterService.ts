import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

/**
 * OpenRouter API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @param modelName 사용할 모델 이름
 * @returns Gemini API 응답
 */
export const getOpenRouterResponse = async (
  question: string,
  modelName: string = "google/gemini-2.0-flash-exp:free"
): Promise<string> => {
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

    console.log("modelName", modelName);

    return (
      completion.choices[0].message.content || "답변을 생성할 수 없습니다."
    );
  } catch (error) {
    console.error("OpenRouter API 호출 오류:", error);
    throw new Error("OpenRouter API 요청 실패");
  }
};
