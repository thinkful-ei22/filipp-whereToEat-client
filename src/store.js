import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import sessionInfoReducer from './reducers/session-Info.reducer';
import placesInfoReducer from './reducers/places-Info.reducer';

const store = createStore(
  combineReducers({
    sessionInfo: sessionInfoReducer, 
    placesInfo: placesInfoReducer
  }), 
  composeWithDevTools(applyMiddleware(thunk)));

export default store;