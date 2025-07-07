import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const VictoryConditions = () => {

    const dispatch = useDispatch()

    const deckOne = useSelector((state) => state.twoPlayerGame.deckOne)
    const deckTwo = useSelector((state) => state.twoPlayerGame.deckTwo)
    const victoryConditions = useSelector((state) => state.twoPlayerGame.victoryConditions)

    const [gameConfirmed, setGameConfirmed] = useState(false)
    const [revealRandoms, setRevealRandoms] = useState(false)
    const [randomCards, setRandomCards] = useState({ cardOne: null, cardTwo: null })

    const getRandomCard = (deck) => {
        if (!deck || deck.length === 0) return null
        const randomIndex = Math.floor(Math.random() * deck.length)
        return deck[randomIndex]
    }

    const determineVictoryConditions = (colorOne, colorTwo) => {
        const nonColors = ['Black', 'White', 'Silver'] // todo will be its own file
        const modeMap = { 0: 'color', 1: 'bonus', 2: 'score' }

        const count = [colorOne, colorTwo].filter(color => nonColors.includes(color)).length
        const gameMode = modeMap[count] || 'score'
        const filteredColors = [colorOne, colorTwo].filter(color => !nonColors.includes(color))

        return {
            mode: gameMode,
            colors: filteredColors,
        }
    }

    const handleConfirmGame = () => {
        const cardOne = getRandomCard(deckOne)
        const cardTwo = getRandomCard(deckTwo)
        setRandomCards({ cardOne, cardTwo })

        setGameConfirmed(true) // head cards disappear

        // determine and dispatch victory conditions
        const victory = determineVictoryConditions(cardOne.color, cardTwo.color)
        dispatch({ type: 'MOD_GAME_PARAMETERS', payload: { victoryConditions: victory } })

        setTimeout(() => {
            setRevealRandoms(true) // random cards appear
        }, 2000)
    }


    return (
        <div>
            <h1>VICTORY CONDITIONS</h1>

            {!gameConfirmed && (
                <>
                    <p>{deckOne[0]?.character}</p>
                    <p>{deckTwo[0]?.character}</p>
                </>
            )}
            {revealRandoms && (
                <>
                    <p>{randomCards.cardOne.character}</p>
                    <p>{randomCards.cardTwo.character}</p>
                </>
            )}


            <button onClick={() => handleConfirmGame()}>Confirm Game Decks</button>

            <p>Mode: {victoryConditions.mode} - | - Colors: {victoryConditions.colors}</p>

            <Link to='/gameBoard'>Play Game</Link>

        </div>
    )
}

export default VictoryConditions
