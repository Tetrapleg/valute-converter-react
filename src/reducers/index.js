import { combineReducers, createStore, applyMiddleware } from 'redux';
import { valutesReducer } from './vaiutesReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  valutes: valutesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))