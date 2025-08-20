"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react";
import Card from "../card/page";

export default function Home(){

    const[data,setData] = useState([]);
     
    return(
        <div className="flex flex-col items-center  min-h-screen bg-gray-200 ">

            <header className="flex items-center justify-between w-full bg-white shadow-2xl h-20  rounded-lg px-4 py-2 ">

                <h1 className="text-blue-700 text-md sm:text-xl font-bold ">Welcome to Home </h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Event</button>

            </header>

            <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 scroll-auto sm:flex-wrap gap-4 ">

                {data.map((item,index)=>(

                     <div className="basis-1/3">
                         <Card key={index}  />
                    </div> 
                ))}

            </div>
            
        </div>
    )
}