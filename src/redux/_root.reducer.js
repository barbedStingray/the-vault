import { combineReducers } from 'redux';
import setupView from './gamePlay/setupView.reducer';
import twoPlayerGame from './gamePlay/twoPlayerGame.reducer';

const rootReducer = combineReducers({
    setupView,
    twoPlayerGame,
    
});

export default rootReducer;
