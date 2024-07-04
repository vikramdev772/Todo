
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./config/db"
import {Request,Response} from "express";
import router from "./router/router";
import errorHandler from "./middlewares/Error";
dotenv.config();
const app = express();
const port =   process.env.PORT || 4000;

console.log(`\n\t Environment Port: ${process.env.PORT}`);
console.log(`\n\t Configured Port: ${port}\n`);
// const port = 5050;

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req:Request,res:Response)=>res.json({msg: "server is running sucessfully"}));
app.use("/api",router);


app.use(errorHandler);

app.listen(port,()=>{console.log(`\n\t Server : http://127.0.0.1:${port} \n`); db()});




