import mongoose, { mongo }  from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGO_URI;

if(!url){
    throw new Error("MONGO_URI is not defined in the environment variables.")
}

 const db=async ()=>{
    try{
        await mongoose.connect(url);
        console.log("\n\t Mongo db is connected \n");
    }catch(e){
        console.error("\n\t Error connecting to MongoDB", e)
        process.exit(1);
    }
}


export default db;
