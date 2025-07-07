import React from 'react'
import { Link } from 'react-router-dom'

const MenuScreen = () => {


  return (
    <div>
      <h1>MENU Title</h1>

      <Link to='/gameSetup'>Solo Challenge</Link>
      <Link to='/'>My Decks</Link>
      <Link to='/'>Deck Builder</Link>
      <Link to='/'>Card Library</Link>

    </div>
  )
}

export default MenuScreen
