const initialState = {
  deckOne: [],
  deckTwo: [],
  victoryConditions: {
    mode: 'score', // color // bonus (+15)
    colors: [], 
  },
};

const twoPlayerGame = (state = initialState, action) => {
  switch (action.type) {
    case 'MOD_GAME_PARAMETERS':
      return {
        ...state,
        ...action.payload, // merge new keys/values into current state
      };
    default:
      return state;
  }
};

export default twoPlayerGame;


