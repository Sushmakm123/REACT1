import React from 'react'
import { Component } from 'react';
class App extends Component{
  state={
    subject:"react js",
    skills:["html","css","js"]
}
render()
{
    return(
        <>
        <h1>{this.state.subject}</h1>
        <ul>
            {this.state.skills.map((x)=>{
                return <li>{x}</li>
            })}
        </ul>
        </>
    )
}
}
export default App;