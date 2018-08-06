import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import placesReducer from './reducers/session-reducer';

const store = createStore(placesReducer, applyMiddleware(thunk));

export default store;