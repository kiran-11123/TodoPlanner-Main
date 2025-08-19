"use client"

import { useState } from "react";

export default function Card() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`flex flex-col gap-4 items-center bg-white shadow-xl rounded-xl p-6 transition-all duration-300 ${
                expanded
                    ? "max-w-3xl w-full h-[600px] scale-105 z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    : "max-w-sm sm:max-w-md"
            }`}
        >
            <img
                src="/image.jpg"
                alt="Card image"
                className={`object-cover border-2 rounded-lg opacity-90 ${
                    expanded ? " h-70 w-full " : "w-full h-60"
                }`}
            />

            <h2 className="text-md sm:text-lg font-bold text-gray-800 mt-2">
                Card Title
            </h2>

            <p className="text-gray-600 text-base text-center">
                Card description goes here.
            </p>

            {expanded && (
                 
                 <div className="w-full mt-2 flex flex-col items-center gap-4">
                    
                    <div className="flex w-full items-center justify-evenly">
                        <p className="text-lg text-black  text-center">Event Date </p>
                        <p className="text-lg text-black text-center">Event Venue</p>
                        <p className="text-lg text-black text-center"> Event Duration</p>
                        <p className="text-lg text-black text-center">Start Time</p>
                        <p className="text-lg text-black text-center"> Organized By</p>
                        <p className="text-lg text-black text-center">Ticket Price </p>
                    </div>

                  

                    <button className="px-4 py-2 border-1 rounded-lg bg-white font-bold ">Buy Ticket</button>

                    
                 </div>

                 
            )}

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Close" : "View details"}
            </button>
        </div>
    );
}