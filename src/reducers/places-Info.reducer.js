import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  ADD_PLACE_SUCCESS,
  ADD_PLACE_ERROR,
  FETCH_MOST_POP_PLACE_REQUEST,
  FETCH_MOST_POP_PLACE_SUCCESS,
  FETCH_MOST_POP_PLACE_ERROR,
  DELETE_PLACE_REQUEST,
  DELETE_PLACE_SUCCESS,
  DELETE_PLACE_ERROR,
} from '../actions/places-Info.actions';

const initialState = {
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