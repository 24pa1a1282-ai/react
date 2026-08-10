import React from 'react'
import Bharath from '../Bharath'

const students = ({assest , people ,numbers , greets}) => {

  const total = numbers.reduce((a,b)=>{
    return a +b
  },0)
  return (
    <div>
      <h1>Hello Student</h1>
      <p>Name : {people.name}</p>
      <p>Reg No : {people.regNo}</p>
      {/* <Bharath tree={assest}/> */}

      <button onClick={greets}>Say Hello</button>

<p>{total}</p>
      <div>
        {
          numbers.map((number)=>{
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

export default students
