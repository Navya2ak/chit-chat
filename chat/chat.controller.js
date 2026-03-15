const chatService = require("./chat.service");
export const chatController = {
  chat: (req, res) => {
    const { content } = req.body;
    const response = chatService.chat(content);
    return (res = { response });
  },
};
