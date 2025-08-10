import express from 'express';
const User_Router = express.Router();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);



async function main(text) {
    // Use a supported model name from your listModels output, e.g. "gemini-pro"
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Replace with your supported model
    const result = await model.generateContent(text);
    return result.response.text();
}

User_Router.post("/GetPlan", async (req, res) => {
    try {
        const data = req.body.input;
        const result = await main(data);

        return res.json({
            message: "Success",
            result: result
        });
    } catch (er) {
        console.error(er);
        return res.status(400).json({
            message: "Internal Server Error",
            error: er
        });
    }
});

export default User_Router;