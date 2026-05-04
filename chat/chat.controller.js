const chatService = require("./chat.service");

const chatController = {
  chat: async (req, res) => {
    try {
      const response = await chatService.chat(req.body);
      res.send({ response });
    } catch (error) {
      console.log("error occurred during chat", error);
      res.status(500).send({ error: "Failed to process chat" });
    }
  },
};

module.exports = { chatController };
