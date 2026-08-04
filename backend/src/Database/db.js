import mongoose from "mongoose";

let connectDb = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("Database is connected");
    } catch (error) {
        console.log(`Error in Database connection : ${error}`);
    }
}


export default connectDb;