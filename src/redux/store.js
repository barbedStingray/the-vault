import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './_root.reducer';

const middlewareList = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

export default store;