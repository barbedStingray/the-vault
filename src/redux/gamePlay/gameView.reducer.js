const gameView = (state = 'deckSelection', action) => {
    switch (action.type) {
        case 'SET_GAME_VIEW':
            return action.payload
        default:
            return state
    }
}

export default gameView