import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// view imports
import OpponentSelect from './opponentSelect/OpponentSelect'
import DeckSelect from './deckSelect/DeckSelect'
import VictoryConditions from './victoryConditions/VictoryConditions'


const GameSetup = () => {

    const dispatch = useDispatch()
    const setupString = useSelector((state) => state.setupView)
    console.log('setupString', setupString)

    const setupView = {
        opponentSelect: <OpponentSelect />,
        deckSelection: <DeckSelect />,
        victoryConditions: <VictoryConditions />,
    }

    return (
        <div>
            <h1>GAME Title</h1>
            <button onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'opponentSelect' })}>opponentSelection</button>
            <button onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'deckSelection' })}>deckSelection</button>
            <button onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'victoryConditions' })}>victoryConditions</button>

            <div>{setupView[setupString]}</div>

        </div>
    )
}

export default GameSetup
