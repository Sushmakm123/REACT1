import React from 'react'
import { Component } from 'react';
class App extends Component{
state={
    username:"sam"
}
render()
{
    return(
        <>
        <h1>{this.state.username}</h1>
        </>
    )
}
}
export default App;