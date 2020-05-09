import React, { Component } from 'react'

export default class ValidateComponent extends Component {
render(){
  const length = this.props.length === 0 
  ? ''
  : this.props.length > 7 
  ? 'Your comment is long enough'
  : 'Your comment is too short'
  console.log(this.props.length)
  return (
    <div>
      {length}
    </div>
  )}
}
