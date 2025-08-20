"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react";
import Card from "../card/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Home(){
    
    const router = useRouter();
    const[data,setData] = useState([]);
    const[isfound , setIsfound] = useState(true);

    useEffect(()=>{

        async function FetchData() {

            try{

            

            const response = await axios.get("http://localhost:5000/api/eventsData/allEvents" ,{
                withCredentials:true
            })
            
            if(response.data.TotalData){
                setIsfound(true);
                 
                setData(response.data.TotalData);
            }
            else{
                setIsfound(false);
            }

        }
        catch(er){
            console.log("Error Fetching the Data " , er);
        }
        
        }

        FetchData();

    },[])

    function ToEventUpload(){
        router.push("/eventupload");
    }


     
    return(
        <div className="flex flex-col items-center  min-h-screen bg-gray-200 ">

            <header className="flex items-center justify-between w-full bg-white shadow-2xl h-20  rounded-lg px-4 py-2 ">

                <h1 className="text-blue-700 text-md sm:text-xl font-bold ">Welcome to Home </h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg " onClick={ToEventUpload}>Add Event</button>

            </header>

            <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 scroll-auto sm:flex-wrap gap-4 ">

              {isfound ? data.map((item,index)=>(

                     <div key={index} className="basis-1/3">
                         <Card  />
                    </div> 
                )) : <p className="text-center sm:text-xl text-md font-bold  ">No Events Found</p>}

            </div>
            
        </div>
    )
}