import React, { useEffect, useState } from 'react'
const UseState = () => {
const[count,setCount]=useState(0)
const[type , setType]=useState("Even")
const inc =()=>{
    setCount((prev)=>prev+1)
}
const dec =()=>{
    setCount(count-1)
}

useEffect(()=>{
  if(count%2 === 0){
    setType("Even")
  }else{
    setType("Odd")
  }
},[count])
  return (
    <div>
    <h1>  this is useState Example</h1>
      <p>Count : {count}</p>
      <p>Type is : {type}</p>
      <button onClick={inc}>Inv</button>
      <button onClick={dec}>Dec</button>

    </div>
  )
}

export default UseState
