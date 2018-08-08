import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  ADD_PLACE_SUCCESS,
  ADD_PLACE_ERROR,
  NEW_SESSION_REQUEST,
  NEW_SESSION_SUCCESS,
  NEW_SESSION_ERROR,
  FETCH_MOST_POP_PLACE_REQUEST,
  FETCH_MOST_POP_PLACE_SUCCESS,
  FETCH_MOST_POP_PLACE_ERROR,
  DELETE_PLACE_REQUEST,
  DELETE_PLACE_SUCCESS,
  DELETE_PLACE_ERROR
} from '../actions/session-actions';

const initialState = {
  sessionId: null,
  places: [],
  popularPlace: null,
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
  } else if (action.type === NEW_SESSION_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === NEW_SESSION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      sessionId: action.sessionId
    });
  } else if (action.type === NEW_SESSION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === FETCH_MOST_POP_PLACE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_MOST_POP_PLACE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === FETCH_MOST_POP_PLACE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      popularPlace: action.popularPlace
    });
  } else if (action.type === DELETE_PLACE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === DELETE_PLACE_SUCCESS) {
    console.log('ACTION', action);
    return Object.assign({}, state, {
      loading: false,
      error: null,
      places: state.places.filter(place => place.id !== action.deleteId)
    });
  } else if (action.type === DELETE_PLACE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state;
}