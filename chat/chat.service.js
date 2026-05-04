const { Ollama } = require("ollama");
const ChatHistory = require("../config");

const ollama = new Ollama();

const chatService = {
  async insertChat(message) {
    const { sessionId, role, content } = message;
try{
    const newChat = new ChatHistory({
      sessionId,
      role,
      content,
      createdAt: new Date(),
    });

    return newChat.save();
  }
  catch(error){
    console.log("error",error);
    
  }
  },
  async chat(messages) {
    const userMessage =
      typeof messages === "string"
        ? { role: "user", content: messages }
        : { role: "user", ...messages };

    await this.insertChat(userMessage);

    const query = userMessage.sessionId ? { sessionId: userMessage.sessionId } : {};
    const chatMessages = await ChatHistory.find(query)
      .sort({ createdAt: 1 })
      .select("role content -_id")
      .lean();

    const response = await ollama.chat({
      model: "llama3.2",
      messages: chatMessages,
    });

    const assistantMessage = {
      sessionId: userMessage.sessionId,
      role: "assistant",
      content: response.message.content,
    };

    await this.insertChat(assistantMessage);

    return assistantMessage.content;
  },
};

module.exports = chatService;
