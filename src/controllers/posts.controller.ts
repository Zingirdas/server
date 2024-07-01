
import { Post } from "../models/post";

export class postsController{
    static async getAll(reg:any, res:any){

    }
    static async store(reg:any, res:any){


    const newPost=new Post({
        title:reg.body.title,
        content:reg.body.content
    });
    
    await newPost.save();
    res.json(newPost);
    }
    static async update(reg:any, res:any){

    }
    static async delete(reg:any, res:any){

    }
}