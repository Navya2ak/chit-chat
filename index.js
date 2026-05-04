const express = require("express");
const chatService = require("./chat/chat.service");
const chatRouter=require("./chat/chat.router")
const mongoose=require("mongoose");
 mongoose.connect("mongodb://mailnavyaraj_db_user:passw0rd@ac-zwqzgyy-shard-00-00.3umfliz.mongodb.net:27017,ac-zwqzgyy-shard-00-01.3umfliz.mongodb.net:27017,ac-zwqzgyy-shard-00-02.3umfliz.mongodb.net:27017/?ssl=true&replicaSet=atlas-13hksb-shard-0&authSource=admin&appName=ClusterAZ")
.then(()=>console.log("mongodb connected"))
.catch((error)=>console.log("error occurred during the mongodb connection",error));

const app = express();
app.use(express.json())
app.use(chatRouter)
app.listen(3000, () => {
  console.log("app listening port 3000");
});
