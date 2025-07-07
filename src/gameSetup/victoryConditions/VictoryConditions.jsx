import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const VictoryConditions = () => {


    const deckOne = useSelector((state) => state.twoPlayerGame.deckOne)
    const deckTwo = useSelector((state) => state.twoPlayerGame.deckTwo)
    const victoryConditions = useSelector((state) => state.twoPlayerGame.victoryConditions)

    const getRandomCard = (deck) => {
        if (!deck || deck.length === 0) return null

        const randomIndex = Math.floor(Math.random() * deck.length)
        return deck[randomIndex]
    }

    const randomCardOne = getRandomCard(deckOne)
    const randomCardTwo = getRandomCard(deckTwo)
    console.log('randoms', randomCardOne, randomCardTwo)

    // todo determine random card status

    const determineVictoryCondition = (colorOne, colorTwo) => {
        console.log('victory condition', colorOne, colorTwo)
        const nonColors = ['Black', 'White', 'Silver'] // todo will be its own file
        const modeMap = { 0: 'color', 1: 'bonus', 2: 'score' }
        const count = [colorOne, colorTwo].filter(color => nonColors.includes(color)).length
        const gameMode = modeMap[count] || 'score'
        console.log('gameMode', gameMode)
        const filteredColors = [colorOne, colorTwo].filter(color => !nonColors.includes(color))
        console.log('filteredColors', filteredColors)

        return {
            gameMode,
            colors: filteredColors,
        }
    }


    return (
        <div>
            <h1>VICTORY CONDITIONS</h1>

            <p>{randomCardOne?.character}</p>
            <p>{randomCardTwo?.character}</p>

            <button onClick={() => determineVictoryCondition(randomCardOne.color, randomCardTwo.color)}>Confirm Game Decks</button>

            <p>Mode: {victoryConditions.mode} - Bonus: {victoryConditions.bonus} - Colors: {victoryConditions.colors}</p>

            <button>Play Game</button>

        </div>
    )
}

export default VictoryConditions
