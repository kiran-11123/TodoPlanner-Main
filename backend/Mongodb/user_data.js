import mongoose from "mongoose";




const User_Details = new mongoose.Schema({
       
     userId :{
        type:Number,
        required:true
    },
    history:[
        {
            Searched_Prompt:String,
            result : String
        }
    ]
},{
    timestamps:true
})

const Users_history = mongoose.model("Users_history" , User_Details);






export default(Users_history);