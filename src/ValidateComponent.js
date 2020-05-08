import React, { Component } from 'react'

export default class ValidateComponent extends Component {
render(){
  
  return (
    <div>
      <input onChange={this.props.change}/>
      <p>{this.props.text}</p>
      <p>{this.props.text.length}</p>
    </div>
  )}
}
