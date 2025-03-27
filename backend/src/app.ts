// src/app.ts
import express, { Request, Response } from "express"; // express와 타입을 import

const app = express();
const port = 5000;

app.use(express.json());

// 기본 라우트
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/chatgpt", require("./routes/chatgptRoutes"));
app.use("/api/gemini", require("./routes/geminiRoutes"));

// 서버 시작
app.listen(port, (): void => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
