import React, { useEffect, useRef, useState } from 'react'

const PrevCount = () => {
    const[count , setCount]=useState(6747)
    const prevCount = useRef([])

    useEffect(()=>{
        // prevCount.current = count
        prevCount.current.push(count)
    },[count])
  return (
    <div>
      <h2>To store Prev Counts</h2>
    <p>Count is {count}</p>
    <button onClick={()=>setCount(count + 1)}>Inc</button>
    <p>prevCount is {prevCount.current}</p>
    <div>
        {
            prevCount.current.map((number)=>{
                return(
                    <>
                    <p>{number}</p>
                    </>
                )
            })
        }
    </div>

    </div>
  )
}

export default PrevCount
