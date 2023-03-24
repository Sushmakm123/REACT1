import React, { Component } from 'react'
import { createRef } from 'react';

export default class UncontrolForm extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="username">username</label><br/>
            <input type="text" id="username"/><br/>
            <label htmlFor="password">password</label><br />
            <input type="text" id="password" /><br />
            <button>submit</button>
        </form>
      </div>
    )
  }
}
