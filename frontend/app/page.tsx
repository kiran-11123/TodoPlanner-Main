"use client"

import Image from "next/image";


import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter();

  function ToSignin(){
    router.push("/signin")
  }

  function ToSignup(){
    router.push("/signup")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white shadow-2xl">
       
       
      <div className="w-full flex justify-between items-center px-8 py-4 shadow-2xl  rounded-md bg-blue-500 h-20 text-white ">

        <div className="text-lg font-bold text-md sm:text-2xl   ">
             EventNest
        </div>

        <div className="font-bold text-md sm:xl flex gap-4">
           <button className="px-3 py-2 border-1 shadow-2xl rounded-xl  hover:outline-1" onClick={ToSignin}>Login</button>
           <button className="px-3 py-2 border-1 shadow-2xl rounded-xl hover:outline-1" onClick={ToSignup}>Register</button>
        </div>

      </div>
          
       

    </div>
  );
}
