const mongoose=require("mongoose");

const chatHistorySchema=new mongoose.Schema({
    sessionId:String,
    role:String,
    content:String,
    createdAt:Date

})

module.exports=mongoose.model("ChatHistory",chatHistorySchema)