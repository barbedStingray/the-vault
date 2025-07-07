import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bensDeck } from '../../tempData/characters'

const DeckSelect = () => {

    const dispatch = useDispatch()
    const verifyDeckOne = useSelector((state) => state.twoPlayerGame.deckOne)
    console.log('verifyDeckOne', verifyDeckOne)


    const playerDecks = {
        Aurora: ['Aurora', 'Fairies', 'Mom'],
        Belle: ['Belle', 'The Beast', 'Chip'],
        Hercules: ['Hades', 'Pain', 'Panic']
    }

    const handleSelect = (deck) => {
        const selectedDeck = playerDecks[deck]
        dispatch({
            type: 'MOD_GAME_PARAMETERS',
            payload: {
                deckOne: selectedDeck,
            },
        })
    }

    return (
        <div>
            <h1>Choose your playing deck</h1>

            {Object.keys(playerDecks).map((deck) => (
                <p
                    key={deck}
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => handleSelect(deck)}
                >
                    {deck}
                </p>
            ))}
            <p
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => dispatch({
                    type: 'MOD_GAME_PARAMETERS', payload: { deckOne: bensDeck, },
                })}
            >
                bens deck
            </p>


            <button
                onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'victoryConditions' })}
                disabled={!verifyDeckOne || verifyDeckOne.length === 0}
            >
                Confirm Deck
            </button>


        </div>
    )
}

export default DeckSelect
