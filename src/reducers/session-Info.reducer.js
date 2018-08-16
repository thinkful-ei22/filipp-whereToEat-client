import {
  SET_LOCATION,
  NEW_SESSION_REQUEST,
  NEW_SESSION_SUCCESS,
  NEW_SESSION_ERROR
} from '../actions/session-Info.actions';

const initialState = {
  sessionId: null,
  loading: false,
  error: null,
  userLocation: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_LOCATION) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      userLocation: action.userLocation
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
  }

  return state;
}