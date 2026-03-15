const router = require("router");
const { chatController } = require("./chat.controller");
router.post("/chat", (req, res) => chatController.chat(req, res));
