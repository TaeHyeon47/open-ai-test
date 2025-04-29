import dotenv from "dotenv";

dotenv.config();

/**
 * Local AI API를 호출하여 답변 생성
 * @param question 사용자의 문의사항
 * @param modelName 사용할 모델 이름
 * @returns Local AI  API 응답
 */
export const getLocalAiResponse = async (
  question: string,
  modelName: string = "GPT4ALL FaIcon"
): Promise<string> => {
  console.log("Local AI question", question);
  console.log("Local AI modelName", modelName);

  try {
    const response = await fetch("http://localhost:4891/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
        max_tokens: 30000,
        temperature: 0.3,
      }),
    });
    const data = await response.json();

    console.log("Local AI response", data);
    console.log(data.choices[0].message.content);

    return data.choices[0].message.content || "답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Local AI API 호출 오류:", error);
    throw new Error("Local AI API 요청 실패");
  }
};
