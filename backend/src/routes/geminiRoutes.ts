import express, { Router } from "express";
const router: Router = express.Router();
const geminiController = require("../controllers/geminiController");

/**
 * 고객 문의를 받아 GPT 응답을 반환하는 API
 */
router.route("/").post(geminiController.getGemini);

module.exports = router;
