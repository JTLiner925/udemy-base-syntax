import React from 'react'

export default function ClickCount(props) {
  return (
    <div>
      <p>You have clicked the button {props.num} number of time(s)</p>
      <button onClick={props.click} value={props.num}>Click Me!</button>
    </div>
  )
}
