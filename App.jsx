import React, { Component } from 'react'

export default class App extends Component {
constructor(){
    super()
    this.state={
        username:"upendra"
    }
}
componentDidMount()
{
    let btn=document.querySelector('button')
    btn.addEventListener('click',()=>{
        this.setState({username:this.state.username="KGF"})
    })
}
render() {
    return (
        <>
      <div>{this.state.username}</div>
      <button>change</button>
      </>
    )
  }
}
