import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Students from './Students'

const GrandFather = () => {
  const student={
    name:"Bharath",
    regNo:23654,
    address:"Banglore"
  }
const numbers =[10,20,30,40,50]

const greet =()=>{
  alert("Hello")
}

  const land = 10/2 //variable is land
  return (
    <div>
      <h1>This is from GrandP comp</h1>
      <hr />
      {/* //assest is a parameter which stores land variable */}
      {/* <Child1 assest={land}/>  */}
      <hr />
      {/* //assest is a parameter which stores land variable */}
      {/* <Child2 assest={land}/>  */}

      <hr />
      <Students assest={land} people={student} greets={greet} numbers={numbers}/>
    </div>
  )
}

export default GrandFather
