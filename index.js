const express = require("express");
const {Ollama} = require("ollama");
const ollama=new Ollama();
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("ok");
});


app.post("/", async (req, res) => {
  let query = req.body.content;
  let response=await chat(query);
  res.send(response.message.content)
});


app.listen(3000, () => {
  console.log("app listening port 3000");
});

async function chat(query) {
  const response = await ollama.chat({
    model: "llama3.2",
    messages: [
      { role: "system", content: "You are a helpful support assistant" },
      { role: "user", content: query },
    ],
  });
  console.log(response)
  return response;
}
