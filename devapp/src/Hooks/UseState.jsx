import React, { useState } from 'react'
const UseState = () => {
const[count,setCount]=useState(0)
const inc =()=>{
    setCount(count+5)
}
const dec =()=>{
    setCount(count-3)
}


console.log(count)
  return (
    <div>
    <h1>  this is useState Example</h1>
      <p>Count : {count}</p>
      <button onClick={inc}>Inv</button>
      <button onClick={dec}>Dec</button>

    </div>
  )
}

export default UseState
