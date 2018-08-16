import {API_BASE_URL} from '../config';

export const SET_LOCATION = 'SET_LOCATION';
export const setLocation = userLocation =>({
  type: SET_LOCATION,
  userLocation
});

export const NEW_SESSION_REQUEST = 'NEW_SESSION_REQUEST';
export const newSessionRequest = () => ({
  type: NEW_SESSION_REQUEST
});

export const NEW_SESSION_SUCCESS = 'NEW_SESSION_SUCCESS';
export const newSessionSuccess = sessionId => ({
  type: NEW_SESSION_SUCCESS,
  sessionId
});

export const NEW_SESSION_ERROR = 'NEW_SESSION_ERROR';
export const newSessionError = error => ({
  type: NEW_SESSION_ERROR,
  error
});



export const setUserLocation = (userLocation) => (dispatch) => {
  //console.log('Setting location');
  dispatch(setLocation(userLocation));
};

export const createSession = (userLocation) => (dispatch) => {
  //console.log('Create session is running');
  dispatch(newSessionRequest());
  return fetch(`${API_BASE_URL}/api/session`, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({userLocation})
  })
    .then(res => {if (res.ok) return res.json();})
    .then(({sessionId}) => {
      dispatch(newSessionSuccess(sessionId));
    })
    .catch(err => {dispatch(newSessionError(err));
    });
};