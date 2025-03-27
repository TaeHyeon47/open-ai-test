// app.js
const express = require("express"); // express 모듈 가져오기
const app = express(); // express 애플리케이션 생성
const port = 3000; // 서버 포트 설정

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, World!"); // 기본 페이지 응답
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
