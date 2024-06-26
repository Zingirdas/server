import mongoose, { Mongoose } from "mongoose";

const postSchema=new mongoose.Schema({
    title:String,
    content: String


});

const Post=mongoose.model("Post", postSchema);

export{Post};