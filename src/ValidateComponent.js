import React from 'react'

export default function ValidateComponent( props ) {
  let validationMessage = 'Text long enough';

  if(props.length === 0){
    validationMessage = ''
  }
  else if(props.length <= 5){
    validationMessage = 'Text too short';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}