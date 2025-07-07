const setupView = (state = 'opponentSelect', action) => {
    switch (action.type) {
        case 'CHANGE_SETUP_VIEW':
            return action.payload
        default:
            return state
    }
}

export default setupView