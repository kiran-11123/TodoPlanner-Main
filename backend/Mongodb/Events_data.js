import express from 'express'
import mongoose from 'mongoose'



const Events_details = new mongoose.Schema({
          EventName:String,
          EventImage:String,
          EventDate:Date,
          Duration:String,
          Venue:String,
          OrganizedBy:String,
          StartTime:String,
          EndTime:String,
          EventType:String,
          TotalTickets:String,
          Price:Number,

})


const Event_data = mongoose.model("Events_data" , Events_details);


export default Event_data;