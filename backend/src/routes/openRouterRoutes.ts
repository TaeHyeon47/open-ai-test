import express, { Router } from "express";
const router: Router = express.Router();
const openRouterController = require("../controllers/openRouterController");

router.route("/").post(openRouterController.getOpenRouter);

module.exports = router;
