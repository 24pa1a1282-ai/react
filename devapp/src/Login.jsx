import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashBoard from './DashBoard'

const Login = () => {
    const navigate = useNavigate()
    const[email ,setEmail]= useState("")
    const[password,setPassword] = useState("")
    const[emails ,setEmails]=useState("")

    const dashboardfn =(e)=>{
     e.preventDefault()
     setEmails(email)
navigate('/dashboard')
    }

  return (
    <div>
      <h1>Login Form</h1>
<form action="" onSubmit={dashboardfn}>
    
      <label htmlFor="">Email</label> <br />
      <input type="email" name="" id="" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      /> <br />

      <label htmlFor="">Password</label> <br />
      <input type="password" name="" id="" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      /> <br />

      <button type='submit'>Submit</button>
</form>
<DashBoard useremail={emails}/>
    </div>
  )
}

export default Login
