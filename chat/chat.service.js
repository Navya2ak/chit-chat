const { Ollama } = require("ollama");
const ollama = new Ollama();

export const chatService = {
  async chat(messages) {
    const response = await ollama.chat({
      model: "ollama3.2",
      messages,
    });
    return response.message.content;
  },
};
