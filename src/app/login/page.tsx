"use client"

import Link from "next/link";
import { useState } from "react";
export default function Loginpage(){

    const [user, setUser]= useState({
    
        email: "",
        password: ""
    });

    const onLogin =async () =>{

    }
    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h3>Login</h3>
        <hr />
 
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
          <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>Login</button>
         <Link href="/signup">Visit signup page</Link> 
    </div>
    )
}