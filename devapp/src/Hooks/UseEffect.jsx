import React, { useState ,useEffect} from 'react'

const UseEffect = () => {
const[data , setData]=useState([])

const fetchData=async()=>{
    try {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then((datas)=>setData(datas))
    } catch (error) {
        
    }
}
useEffect(()=>{
    fetchData()
},[])
console.log(data)

  return (
    <div>
      this is an effect example <br />


    </div>
  )
}

export default UseEffect
