import mongoose from "mongoose";





const User_Details = new mongoose.Schema({
       
     userId :{
        type:Number,
        required:true
    },
    history:[
        {
           

          EventName:String,
          EventImage:String,
          EventDate:String,
          Duration:String,
          OrganizedBy:String,
          StartTime:String,
          EndTime:String,
          Totaltickets:Number,
            
            
           
        }
    ]
},{
    timestamps:true
})

const Users_history = mongoose.model("Users_history" , User_Details);






export default Users_history;