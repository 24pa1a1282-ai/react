import React, { useState } from 'react'

const Form = () => {
    const[name , setName]=useState("")
    const[email , setEmail]=useState("")
    const[password , setPassword]=useState("")
    const [role , setRole]=useState("Student")
    const submit=(e)=>{
    e.preventDefault()
    try {
        const data ={name , email , password,role}
        localStorage.setItem("Form Data" ,JSON.stringify(data))
         sessionStorage.setItem("Form Data" ,JSON.stringify(data))
        alert("Data Saved Sucessfully")
        setName("")
        setEmail("")
        setPassword("")
        setRole("Student")
    } catch (error) {
        console.log(error)
    }
    }
  return (
    <div>
     <h1>Signup form</h1>
   <form action="" onSubmit={submit}>
      <label htmlFor="">Name </label><br /> 

     <input type="text" name="" id="" 
     value={name}
     onChange={(e)=>setName(e.target.value)}
     /> <br />

     <label htmlFor="">Email </label><br /> 

     <input type="email" name="" id="" 
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     /> <br />

     <label htmlFor="">Password </label><br /> 

     <input type="password" name="" id=""
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     /> <br />

<select name="" id="" value={role} defaultValue="Student"
 onChange={(e)=>setRole(e.target.value)}> 
    <option value="Student">Student</option>
    <option value="Teacher">Teacher</option>
</select> <br />

     <button type='submit'>Submit</button>
   </form>
    </div>
  )
}

export default Form
