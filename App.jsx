import React from "react";
import { Component,createRef } from "react";
class App extends Component{
    constructor(){
        super()
        this.state={
            name:"hello world!"}
        this.h1ref=createRef()
        
    }
    componentDidMount(){
        let h1=document.querySelector('h1')
        console.log(h1,"DOM WAY");
        console.log(this.h1ref.current,"React way");
    }
    render(){
        return(
            <>
            <h1 ref={this.h1ref}>{this.state.name}</h1>
            </>
        )
    }
}
export default App;