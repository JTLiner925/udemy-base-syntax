import React, { Component } from 'react'

export default class UserInput extends Component{
   state = {
    userName:'',
  }
  render(){
  console.log(this.state.userName)
  return (
    <div>
        <input type='text' onChange={this.props.change} value={this.props.userName}/>
     
    </div>
  )
}
}
