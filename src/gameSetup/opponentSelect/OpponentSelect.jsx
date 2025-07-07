import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { evilDeck } from '../../tempData/characters'


const OpponentSelect = () => {

    const dispatch = useDispatch()
    const verifyDeckTwo = useSelector((state) => state.twoPlayerGame.deckTwo)
    console.log('verifyDeckTwo', verifyDeckTwo)

    const opponentDecks = {
        Maleficent: ['Maleficent', 'Dragon', 'Henchman'],
        Gaston: ['Gaston', 'LeFou', 'militia'],
        Hades: ['Hades', 'Pain', 'Panic']
    }

    const handleSelect = (opponent) => {
        const selectedDeck = opponentDecks[opponent]
        dispatch({
            type: 'MOD_GAME_PARAMETERS',
            payload: {
                deckTwo: selectedDeck,
            },
        })
    }

    // todo choose your difficulty
    // easy, med, hard, legendary

    return (
        <div>
            <h1>Opponent Selection Page</h1>


            {Object.keys(opponentDecks).map((opponent) => (
                <p
                    key={opponent}
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => handleSelect(opponent)}
                >
                    {opponent}
                </p>
            ))}
            <p
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => dispatch({
                    type: 'MOD_GAME_PARAMETERS', payload: { deckTwo: evilDeck, },
                })}
            >
                evil deck
            </p>


            <button
                onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'deckSelection' })}
                disabled={!verifyDeckTwo || verifyDeckTwo.length === 0}
            >
                Confirm Opponent
            </button>

        </div>
    )
}

export default OpponentSelect
