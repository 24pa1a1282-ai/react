import React, { useEffect, useState } from 'react'

const Search = () => {
    const[users , setUsers]=useState([])
    const[search ,setSearch]=useState("")

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then((data)=>{
         const filteredusers =  data.filter((user)=>{
        return user.name.includes(search) ||
               user.email.includes(search) ||
               user.address.city.includes(search)
           })
           setUsers(filteredusers)
        })
    },[search])
  return (
    <div>
        <input type="text" 
        value={search} 
         onChange={(e)=>setSearch(e.target.value)}/>
      <h2>Search Users</h2>
      {
        users.map((user)=>{
            return(
                <>
                <p>{user.name}---{user.email}----{user.address.city}</p>
                </>
            )
        })
      }
    </div>
  )
}

export default Search
