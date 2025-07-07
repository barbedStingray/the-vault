import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <Link to='/'>Menu</Link>
      <Link to='/gameSetup'>Game Setup</Link>
    </div>
  )
}

export default NavigationBar