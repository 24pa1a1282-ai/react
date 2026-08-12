import Students from "./Props/Students"
import GrandFather from "./Props/GrandFather"
import UseState from "./Hooks/UseState"
import PassState from "./Hooks/PassState"
import Hidetext from "./Hooks/Hidetext"
import Input from "./Hooks/Input"
import Form from "./Hooks/Form"
import Home from "./Home"
import Login from "./Login"
import DashBoard from "./DashBoard"
import UseEffect from "./Hooks/UseEffect"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Search from "./Hooks/Search"
import Clock from "./Hooks/Clock"
import Useref from "./Hooks/Useref"
import PrevCount from "./Hooks/PrevCount"

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
      <Route path="/" element={<Home/>}/>
      <Route path="/prevcount" element={<PrevCount/>}/>
      <Route path="/ref" element={<Useref/>}/>
      <Route path="/clock" element={<Clock/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/effect" element={<UseEffect/>}/>
      <Route path="/input" element={<Input/>}/>
      <Route path="/state" element={<UseState/>}/>
      <Route path="/signupform" element={<Form/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App