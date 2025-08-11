import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const secret = process.env.SECRET_KEY

const Authentication_token = (req,res,next)=>{

    const token =req.cookies?.token;


    if(!token){
         return res.status(400).json({
            message:"Unauthorized: No token found"
         })
    }

    try{

        const decoded = jwt.verify(token,secret);

        req.user = decoded; 
        next();

    }
    catch(er){

        return res.status(500).json({
            message:"Invalid token",
            error:er
        })
    }

}

export default Authentication_token;