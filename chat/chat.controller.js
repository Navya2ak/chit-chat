const chatService = require("./chat.service");
export const chatController = {
  chat: (req, res) => {
    //fetch history from mongodb
    const history = req.body.content;
    const response = chatService.chat(history);
    return { response };
  },
};
