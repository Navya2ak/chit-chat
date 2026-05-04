const express = require("express");
const chatRouter=require("./chat/chat.router")
const mongoose=require("mongoose");

process.loadEnvFile();

const DB_URL=process.env.MONGO_DB_URL;

if (!DB_URL) {
  throw new Error("MONGO_DB_URL is missing in .env");
}

mongoose.connect(DB_URL)
.then(()=>console.log("mongodb connected"))
.catch((error)=>console.log("error occurred during the mongodb connection",error));

const app = express();
app.use(express.json())
app.use(chatRouter)
app.listen(3000, () => {
  console.log("app listening port 3000");
});
