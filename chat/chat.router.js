const express = require("express");
const { chatController } = require("./chat.controller");

const router = express.Router();

router.post("/chat", (req, res) => chatController.chat(req, res));

module.exports = router;
