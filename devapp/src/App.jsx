import Students from "./Students"
import GrandFather from "./Props/GrandFather"


function App(){
const greet =()=>{
  alert("Hello")
}
  return(
    <>
    {/* <button onClick={greet}>Click me </button>
    <h1>Hello </h1>
    <Students/> */}
    <GrandFather/>
    </>
  )
}
export default App