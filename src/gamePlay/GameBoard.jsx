import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './gameBoard.css'
import { bensDeck, evilDeck } from '../tempData/characters'


const GameBoard = () => {

    // ! this info will come from the reducer when decks are selected, the game will run off the reducer
    // const { deckOne, deckTwo, victoryConditions } = useSelector((state) => state.twoPlayerGame)
    const deckOne = bensDeck
    const deckTwo = evilDeck
    const victoryConditions = { mode: 'score', colors: [] }
    console.log('theParameters', deckOne, deckTwo, victoryConditions)

    const [gameProgression, setGameProgression] = useState('begin')
    const [boardSlots, setBoardSlots] = useState(Array(2).fill(null))
    const [playerOneHand, setPlayerOneHand] = useState([])
    console.log('playerOneHand', playerOneHand)
    console.log('gameprogression', gameProgression)


    // game phases
    const handleBegin = () => {
        const shuffledDeck = [...deckOne].sort(() => Math.random() - 0.5)
        const dealtCards = shuffledDeck.slice(0, 2)
        setPlayerOneHand(dealtCards)
        setGameProgression('roundOne')
    }


    // card movement
    const handleCardClick = (cardIndex) => {
        // Get the selected card from hand
        const selectedCard = playerOneHand[cardIndex]

        // Update the board slot 0 with the selected card
        setBoardSlots((prevSlots) => {
            const newSlots = [...prevSlots]
            newSlots[0] = selectedCard
            return newSlots
        })

        // Remove the selected card from hand
        setPlayerOneHand((prevHand) => {
            return prevHand.filter((_, i) => i !== cardIndex)
        })
    }







    return (
        <div>
            <h1>THIS IS IT. DON'T GET SCARED NOW</h1>

            <div className='gameBoard'>

                <div className='scoreBoard'>
                    <p>total:</p>
                    <p>p1 score:</p>
                    <p>p2 score:</p>
                </div>


                <div className='cardSide'>
                    <div className='cardSlot'>2</div>
                </div>


                <div className='buttonBar'>Buttons
                    <button onClick={() => handleBegin()}>BEGIN</button>
                </div>


                <div className='cardSide'>
                    <div className='cardSlot'>1</div>
                </div>


                <div className='playerHand'>
                    {playerOneHand.map((card, index) => (
                        <div key={index}>
                            <p>{card.character}</p>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default GameBoard
