import { combineReducers } from 'redux';
import gameView from './gamePlay/gameView.reducer';

const rootReducer = combineReducers({
    gameView,
    
});

export default rootReducer;
