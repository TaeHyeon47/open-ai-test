// src/app.ts
import express, { Request, Response } from "express"; // express와 타입을 import
import cors from "cors";

const app = express();
const port = 5000;

// CORS 설정
app.use(
  cors({
    origin: "http://localhost:3000", // 프론트엔드 URL
    credentials: true,
  })
);

app.use(express.json());

// 기본 라우트
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/chatgpt", require("./routes/chatgptRoutes"));
app.use("/api/gemini", require("./routes/geminiRoutes"));
app.use("/api/deepseek", require("./routes/deepseekRoutes"));
app.use("/api/openrouter", require("./routes/openRouterRoutes"));

// 서버 시작
app.listen(port, (): void => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
