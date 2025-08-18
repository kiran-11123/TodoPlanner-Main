"use client"

import { useState } from "react";
import axios from "axios";
import Link from 'next/link'

export default function Signin(){

    const[message,setMessage] = useState('');
    const[email,setEmail] = useState('');
    const[Password,setPassword]=useState('');


   async function SubmitForm(e:any) {
         
    e.preventDefault()

    const response  = await axios.post("http://localhost:3000/api/auth/signin" ,{
        emaiil:email,
        password:Password
    })

    if(response.status === 200) {
        setMessage('Login successful');
    } else {
        setMessage(response.data.message);
    }
   }
     
    return(
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md  sm:max-w-lg rounded-md px-8 shadow-2xl bg-white">

                <h1 className="font-bold  text-blue-700 text-center text-lg sm:text-xl mb-6 mt-5">Login Here</h1>

                <form className="space-y-5">

                    <div>
                        <label className="font-bold text-lg sm:text-xl block mb-1">
                            Email
                        </label>

                        <input onChange={(e)=>setEmail(e.target.value)}  className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"  placeholder="Enter your Email"  type="email"/>
                    </div>


                      <div>
                        <label className="font-bold text-lg sm:text-xl block mb-1">
                            Password
                        </label>

                        <input  onChange={(e)=>setPassword(e.target.value)}   className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"  placeholder="Enter your Password"  type="Password"/>
                    </div>


                    <button className="text-center font-bold text-lg sm:xl  w-full rounded-lg bg-blue-500 text-white mb-5 px-3 py-2">
                        Login
                    </button>
                     
                </form>

                <div className="w-full mb-10 items-center justify-center text-center ">

                   <p className="text-sm sm:text-lg text-gray-600">
                        Don’t have an account?{' '}
                    <Link href="/signup" className="text-blue-500 hover:underline cursor-pointer">
                        Sign up
                    </Link>
                    </p>

                </div>


                 {message && (

                    <p className="font-black text-center text-lg sm:text-xl">{message}</p>
                )}

            </div>
           
        </div>
    )
}