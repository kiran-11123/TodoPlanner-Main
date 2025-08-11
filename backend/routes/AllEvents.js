import express from 'express';
const AllEvents_Router = express.Router();
import Authentication_token from '../middlewares/Authentication.js';
import Event_data from '../Mongodb/Events_data.js';




AllEvents_Router.get("/allEvents", Authentication_token,async ( req,res)=>{


    try{

     

        const AllData = await Event_data.find();

        if(AllData.length===0){

            return res.status(200).json({
                message:"No Events Present , At this time ",
                TotalData:[]
            })

            
            
        }


        return res.status(200).json({
            message:"Events are Listed",
            TotalData:AllData
        })



    }
    catch(er){
          
        return res.status(400).json({
            message:"Internal Server Error , Data Fetching Failed",
            error:er
        })
    }


     
})
       
    




export default AllEvents_Router;