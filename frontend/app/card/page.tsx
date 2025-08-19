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
                src="image.png"
                alt="Card image"
                className={`object-cover rounded-lg opacity-90 ${
                    expanded ? "w-full h-96" : "w-full h-48"
                }`}
            />

            <h2 className="text-md sm:text-lg font-bold text-gray-800 mt-2">
                Card Title
            </h2>

            <p className="text-gray-600 text-base text-center">
                Card description goes here.
            </p>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Close" : "View details"}
            </button>
        </div>
    );
}