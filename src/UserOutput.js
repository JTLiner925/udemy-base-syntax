import React from 'react'

export default function UserOutput(props) {
  return (
    <div>
      <p>This is {props.userName}'s first statement.</p>
      <p>This is {props.userName}'s second statement.</p>
    </div>
  )
}
