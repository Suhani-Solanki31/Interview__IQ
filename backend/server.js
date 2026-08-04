import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/Database/db.js";
dotenv.config();

let app = express();

//Database connection
connectDb();
let port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Viewing on port 3000")
})


app.listen(3000,()=>{
    console.log("server is runing on port 3000");
})