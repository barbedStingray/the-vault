import React from 'react'
import { useSelector } from 'react-redux'

const GameBoard = () => {

    const { deckOne, deckTwo, victoryConditions } = useSelector((state) => state.twoPlayerGame)
    console.log('theParameters', deckOne, deckTwo, victoryConditions)


    return (
        <div>
            <h1>THIS IS IT. DON'T GET SCARED NOW</h1>


        </div>
    )
}

export default GameBoard
