import { useSelector, useDispatch } from 'react-redux'

import OpponentSelect from './opponentSelect/OpponentSelect'
import DeckSelect from './deckSelect/DeckSelect'
import VictoryConditions from './victoryConditions/VictoryConditions'


const setupView = { // steps
    opponentSelect: <OpponentSelect />,
    deckSelection: <DeckSelect />,
    victoryConditions: <VictoryConditions />
}

const GameSetup = () => {

    // const dispatch = useDispatch()
    const currentView = useSelector((state) => state.setupView)

    return (
        <div>
            <h1>GAME Title</h1>
            {/* <button onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'opponentSelect' })}>opponentSelection</button>
            <button onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'deckSelection' })}>deckSelection</button>
            <button onClick={() => dispatch({ type: 'CHANGE_SETUP_VIEW', payload: 'victoryConditions' })}>victoryConditions</button> */}

            <div>{setupView[currentView]}</div>

        </div>
    )
}

export default GameSetup
