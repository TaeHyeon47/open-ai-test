import express, { Router } from "express";
const router: Router = express.Router();
const localAiController = require("../controllers/localAiController");

router.route("/").post(localAiController.getLocalAi);

module.exports = router;
