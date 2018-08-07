import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import placesReducer from './reducers/session-reducer';

const store = createStore(placesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;