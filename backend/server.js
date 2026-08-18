import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./src/Database/db.js";
import authRouter from "./src/routes/auth.routes.js";
import userRouter from "./src/routes/user.routes.js";
dotenv.config();

let app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());

//Database connection
connectDb();



//auth routes
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);



let port = process  .env.PORT || 6000;
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})