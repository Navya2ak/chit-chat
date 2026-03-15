const express = require("express");
const {Ollama} = require("ollama");
const ollama=new Ollama();

const mongoose=require("mongoose");
 mongoose.connect("mongodb+srv://mailnavyaraj_db_user:passw0rd@clusteraz.3umfliz.mongodb.net/?appName=ClusterAZ")
.then(()=>console.log("mongodb connected"))
.catch((error)=>console.log("error occurred during the mongodb connection",error));

const app = express();
app.use(express.json())

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
