import Students from "./Props/Students"
import GrandFather from "./Props/GrandFather"
import UseState from "./Hooks/UseState"
import PassState from "./Hooks/PassState"
import Hidetext from "./Hooks/Hidetext"
import Input from "./Hooks/Input"
import Form from "./Hooks/Form"

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
    {/* <UseState/> */}
    {/* <PassState/> */}
    {/* <Hidetext/> */}
    {/* <Input/> */}
<Form/>
    </>
  )
}
export default App