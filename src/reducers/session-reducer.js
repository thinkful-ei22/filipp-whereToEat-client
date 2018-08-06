import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  ADD_PLACE_SUCCESS,
  ADD_PLACE_ERROR
} from '../actions/session-actions';

const initialState = {
  places: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PLACES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_PLACES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      places: action.places
    });
  } else if (action.type === FETCH_PLACES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === ADD_PLACE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      places: [...state.places, action.place]
    });
  } else if (action.type === ADD_PLACE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state;
}