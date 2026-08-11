import { Component } from "react";
class Timer extends Component{
   constructor(){
     this.state ={
        timer :0
    } 
    this.componentDidMount(){
       this.timer = setInterval(()=>{
        this.setState = this.timer + 1
       },1000)
    }
    this.componentDidUpdate(){
        this.timer
    }
    this.componentWillUnmount(){
        clearInterval(this.timer)
    }
   }
}

export default Timer