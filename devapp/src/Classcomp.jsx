import { Component } from "react";
class Timer extends Component{
   constructor(){
     this.state ={
        count :0
    } 
    this.componentDidMount(){
       this.setState = this.count + 1
     
    }
    this.componentDidUpdate(){
        this.count
    }
    this.componentWillUnmount(){
        this.count
    }
   }
}

export default Timer