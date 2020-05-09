import React from 'react'

export default function CharComponent(props) {
  return (
    <div>
      <p onClick={()=> props.delete(props.letter)}key={props.key}>{props.letter}</p>
    </div>
  )
}
