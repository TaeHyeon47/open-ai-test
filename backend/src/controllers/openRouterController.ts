import { Request, Response } from "express";
import { getOpenRouterResponse } from "../services/openRouterService";

exports.getOpenRouter = async (req: Request, res: Response) => {
  try {
    const { question, modelName } = req.body;
    if (!question)
      return res.status(400).json({ error: "문의 내용을 입력하세요." });

    const response = await getOpenRouterResponse(question, modelName);
    res.json({ response });
  } catch (error) {
    console.error("OpenRouter API 오류:", error);
    res.status(500).json({ error: "서버 오류 발생" });
  }
};
