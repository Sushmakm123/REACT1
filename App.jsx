import React from 'react'
import { Component } from 'react';
class App extends Component{
 constructor()
{
super()
this.state={
    username:"raj"
}
}
render()
{
    return(
        <h1>{this.state.username}</h1>
    )
}
}
export default App;