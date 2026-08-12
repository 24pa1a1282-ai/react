import React, { useEffect, useRef, useState } from 'react'
const Useref = () => {
const inputRef = useRef(null)
const scrollRef = useRef(null)

const number = useRef(0)
const[count , setCount]=useState(0)

// useEffect(()=>{
//     number.current++
// },[])

console.log("Increased")
// console.log(number.current++)
// const scroll =()=>{
// scrollRef.current.scrollIntoView({behaviour:"smooth"})
// }
// useEffect(()=>{
// inputRef.current.focus()
// },[])
  return (
    <div>
  <p>Count is {count}</p>
   <button onClick={()=>setCount(count+1)}>Inc Count</button>
  {/* <p>Number is {number.current}</p>
  <button onClick={()=>number.current++}>Inc Number</button> */}

      {/* <h2>This is ref Examples</h2>
      <input ref={inputRef} type="text" name="" id="" /> <br /> <br />

      <button onClick={scroll}>Scroll to Contact Section</button>

      <h2 ref={scrollRef} style={{marginTop:"700px"}}>Contact Section</h2> */}
    </div>
  )
}

export default Useref
