import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const GrandFather = () => {
  const land = 10/2 //variable is land
  return (
    <div>
      <h1>This is from GrandP comp</h1>
      <hr />
      {/* //assest is a parameter which stores land variable */}
      <Child1 assest={land}/> 
      <hr />
      {/* //assest is a parameter which stores land variable */}
      <Child2 assest={land}/> 
    </div>
  )
}

export default GrandFather
