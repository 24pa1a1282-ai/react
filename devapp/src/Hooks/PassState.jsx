import React, { useState } from 'react'
const PassState = () => {
const[showPassword , setShowPassword]=useState(false)
const[inputPass , setInputPass]=useState("")
const showhide =()=>{
    setShowPassword(showPassword=>!showPassword)
}
  return (
    <div>
      <h1>This is Password Example</h1>
      <input type={showPassword ? "text" :"password"} name="" id="" 
      value={inputPass} 
      onChange={(e)=>setInputPass(e.target.value)}/>
      <button onClick={showhide}>{showPassword?"Hide":"Show"}</button>
    </div>
  )
}

export default PassState
