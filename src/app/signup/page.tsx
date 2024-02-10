"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Signup(){
    const router = useRouter()
    const [user, setUser]= useState({
        name: "",
        email: "",
        password: ""
    });
const [isDisabled, setIsDisabled]= useState(false)
const [isLoading, setIsLoading]= useState(false);
    const onSignup =async () =>{
    try {
           setIsLoading(true);
       const response = await    axios.post("api/users/signup",user)  ;
        console.log("signup success", response.data)
        router.push("/login")
    } catch (error: any) {
        console.log(error, "Error")
        toast.error(error.message);
    }finally{
        setIsLoading(false)
    }
    }
   useEffect(()=> {
if(user.email.length>0 && user.password.length>0 && user.name.length>0){
    setIsDisabled(false)
}else{
    setIsDisabled(true)
}
   },[user])

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1> {isLoading ? "Loading...": "Signup"} </h1>

        <hr />
        <label htmlFor="username">User Name</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUser({...user, name: e.target.value })}
        placeholder="User name"
         />
          <label htmlFor="email">User Email</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        name="email"
        id="email"
        onChange={(e) => setUser({...user, email: e.target.value })}
        placeholder="User email"
         />
          <label htmlFor="password">User Password</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        name="password"
        id="password"
        onChange={(e) => setUser({...user, password: e.target.value })}
        placeholder="User password"
         />
          <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>{isDisabled ? "No signup": "Signup"}</button>
         <Link href="/login">Visit login page</Link> 
    </div>
    )
}