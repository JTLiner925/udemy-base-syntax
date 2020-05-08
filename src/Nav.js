import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <ul>
      <Link to={'/'}>Home</Link>
      <Link to={'/click-count'}>ClickCount</Link>
      <Link to={'/name-changer'}>NameChanger</Link>
    </ul>
  )
}
