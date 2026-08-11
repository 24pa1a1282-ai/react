import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/signupform")}>Forms</button>
      <button onClick={()=>navigate("/input")}>Input</button>
      <button onClick={()=>navigate('/state')}>State</button>
      <button onClick={()=>navigate('/login')}>Login</button>
    </div>
  )
}

export default Home
