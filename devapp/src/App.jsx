import Students from "./Props/Students"
import GrandFather from "./Props/GrandFather"
import UseState from "./Hooks/UseState"


function App(){
const greet =()=>{
  alert("Hello")
}
  return(
    <>
    {/* <button onClick={greet}>Click me </button>
    <h1>Hello </h1>
    <Students/> */}
    {/* <GrandFather/> */}
    <UseState/>
    </>
  )
}
export default App