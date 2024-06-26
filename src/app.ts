import express, { Application } from "express";
import mongoose from "mongoose";
import { Post } from "./models/post";


const app:Application=express();

mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>{
    console.log("Prisijungiame prie MongoDB");
    const naujasIrasas=new Post({
        title:"Pirmasirasas",
        content:"Pirmojo iraso tekstas"
    });
    console.log(naujasIrasas);
    naujasIrasas.save();
    
})
.catch((error)=>console.log(error));



export{app}