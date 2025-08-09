import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import Auth_router from "./routes/Authentication_routes.js"
import ConnectDb from "./Mongodb/db.js"
import User_Router from "./routes/TodoPlanner.js"

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", Auth_router);
app.use("/api/user" , User_Router);

app.use(cookieParser());
await ConnectDb();











app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})