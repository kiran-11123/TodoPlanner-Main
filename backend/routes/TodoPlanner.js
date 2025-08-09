import express from 'express';
import Users_history from '../Mongodb/user_data.js';
const User_Router = express.Router();
import OpenAI from "openai"
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


async function main(text){

    const completion =await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[
            {role:"user" , content:text}
        ]

    });

    return completion.choices[0].message.content;
    
}


User_Router.post("/GetPlan" , async(req,res)=>{
      
    try{

         const data = req.body.input;

         const result = await main(data);

         console.log(result);



    }
    catch(er){
         
        return res.status(400).json({

            message:"Internal Server Error",
            error:er

        })
    }
})




















export default User_Router;