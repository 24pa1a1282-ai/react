import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const[users , setUsers]=useState([])
const fetchData =async()=>{
try {
  await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((data)=>setUsers(data))
} catch (error) { 
}
}
useEffect(()=>{
  fetchData()
},[])
console.log(users)
  return (
    <div>
      <h2>Users Data</h2>
      <div>
        {
users.map((user)=>{
  return (
    <>
    <p>{user.name} ------- {user.email}-------{user.address.city}</p>
    </>
  )
})
        }
      </div>
    </div>
  )
}

export default UseEffect
