import React, { useState } from 'react'
const Hidetext = () => {
const[showText , setShowText]=useState(false)
const showhide =()=>{
    setShowText(prev=>!prev)
}
  return (
    <div>
      <h1>This is simple Accordation Example</h1>
      <button onClick={showhide}>What is React ?</button>
    {
     showText && <p>React is a Javascript Library.</p>
    }
    </div>
  )
}

export default Hidetext
