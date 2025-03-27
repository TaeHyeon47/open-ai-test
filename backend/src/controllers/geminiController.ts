import { Request, Response } from "express";
import { getGeminiResponse } from "../services/geminiService";

exports.getGemini = async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    if (!question)
      return res.status(400).json({ error: "문의 내용을 입력하세요." });

    const response = await getGeminiResponse(question);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: "서버 오류 발생" });
  }
};
