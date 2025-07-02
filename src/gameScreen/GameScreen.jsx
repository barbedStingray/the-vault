import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DeckSelection from './deckSelection/DeckSelection'


const GameScreen = () => {

  const dispatch = useDispatch()
  const viewString = useSelector((state) => state.gameView)
  console.log('viewString', viewString)

  const gameView = {
    deckSelection: <DeckSelection />,
    loadingData: 'loading data',
    victoryConditions: 'Victory conditions',
    playGame: 'Play the Game',
  }

  // place game data / deck characters into a reducer? yes. 

  function changeViewString(newView) {
    dispatch({ type: 'SET_GAME_VIEW', payload: newView })
  }

  return (
    <div>
      <h1>GAME Title</h1>
      <button onClick={() => changeViewString('deckSelection')}>deckSelection</button>
      <button onClick={() => changeViewString('loadingData')}>loadingData</button>
      <button onClick={() => changeViewString('victoryConditions')}>victoryConditions</button>
      <button onClick={() => changeViewString('playGame')}>playGame</button>

      <div>{gameView[viewString]}</div>

    </div>
  )
}

export default GameScreen
