const { Ollama } = require("ollama");
const ollama = new Ollama();
const { ChatHistory } = require("../config");

export const chatService = {
  async insertChat(message) {
    const {sessionId,role,content}=message
    const newChat=new ChatHistory({
        sessionId,
        role,
        content
    })
    newChat.save()
  },
  async chat(messages) {
    const response = await ollama.chat({
      model: "ollama3.2",
      messages,
    });
    return response.message.content;
  },
};
