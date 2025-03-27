import express, { Router } from "express";
const router: Router = express.Router();
const chatgptController = require("../controllers/chatgptController");

/**
 * 고객 문의를 받아 GPT 응답을 반환하는 API
 */
router.route("/").post(chatgptController.getChatgpt);

module.exports = router;
