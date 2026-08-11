import Students from "./Props/Students"
import GrandFather from "./Props/GrandFather"
import UseState from "./Hooks/UseState"
import PassState from "./Hooks/PassState"
import Hidetext from "./Hooks/Hidetext"
import Input from "./Hooks/Input"
import Form from "./Hooks/Form"
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App(){
const greet =()=>{
  alert("Hello")
}
  return(
    <>
    {/* <button onClick={greet}>Click me </button>
    <h1>Hello </h1>*/}

    <BrowserRouter>
    <Routes>
      <Route path="/input" element={<Input/>}/>
      <Route path="/state" element={<UseState/>}/>
      <Route path="/signupform" element={<Form/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App