import React, { useState } from 'react'

const Input = () => {
    const[name , setName]=useState("")
    const[pass , setPass]=useState("")
  return (
    <div>
      <h1>This is an Input</h1>
      <input type="text" name="" id=""
       placeholder='Enter Your Name...'
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />

       <p>Name is {name}</p>

       <input type="password" name="" id="" 
       value={pass}
       onChange={(e)=>setPass(e.target.value)}
       />

       <p>Password is {pass}</p>
    </div>
  )
}

export default Input
