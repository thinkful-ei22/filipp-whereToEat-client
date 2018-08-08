import {API_BASE_URL} from '../config';

export const FETCH_PLACES_REQUEST = 'FETCH_PLACES_REQUEST';
export const fetchPlacesRequest = () => ({
  type: FETCH_PLACES_REQUEST
});

export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const fetchPlacesSuccess = places => ({
  type: FETCH_PLACES_SUCCESS,
  places
});

export const FETCH_PLACES_ERROR = 'FETCH_PLACES_ERROR';
export const fetchPlacesError = error => ({
  type: FETCH_PLACES_ERROR,
  error
});

export const FETCH_MOST_POP_PLACE_REQUEST = 'FETCH_MOST_POP_PLACE_REQUEST';
export const fetchMostPopPlaceRequest = () => ({
  type: FETCH_MOST_POP_PLACE_REQUEST
});

export const FETCH_MOST_POP_PLACE_SUCCESS = 'FETCH_MOST_POP_PLACE_SUCCESS';
export const fetchMostPopPlaceSuccess = popularPlace => ({
  type: FETCH_MOST_POP_PLACE_SUCCESS,
  popularPlace
});

export const FETCH_MOST_POP_PLACE_ERROR = 'FETCH_MOST_POP_PLACE_ERROR';
export const fetchMostPopPlaceError = error => ({
  type: FETCH_MOST_POP_PLACE_ERROR,
  error
});



export const ADD_PLACE_SUCCESS = 'ADD_PLACE_SUCCESS';
export const addPlaceSuccess = place => ({
  type: ADD_PLACE_SUCCESS,
  place
});

export const ADD_PLACE_ERROR = 'ADD_PLACE_ERROR';
export const addPlaceError = error => ({
  type: ADD_PLACE_SUCCESS,
  error
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

//Fetching ALL places for the current sessionId
export const fetchPlaces = (sessionId) => (dispatch) => {
  console.log('fetch is running');
  dispatch(fetchPlacesRequest());
  return fetch(`${API_BASE_URL}/api/places/${sessionId}`)
    .then(res => res.json())
    .then((places) => {
      console.log('PLACES', places);
      dispatch(fetchPlacesSuccess(places));
    })
    .catch(err => {dispatch(fetchPlacesError(err));
    });
};

//Fetch only the most popular place out of ones that share a sessionId
export const fetchMostPopPlace = (sessionId) => (dispatch) => {
  console.log('fetching most popular place');
  dispatch(fetchMostPopPlaceRequest());
  return fetch(`${API_BASE_URL}/api/results/${sessionId}`)
    .then(res => res.json())
    .then((popularPlace) => {
      console.log('POP RESULT', popularPlace);
      dispatch(fetchMostPopPlaceSuccess(popularPlace));
    })
    .catch(err => {dispatch(fetchMostPopPlaceError(err));
    });

};

//Adding a new place to the current sessionId
export const addPlace = (place, sessionId) => (dispatch) => {
  console.log('post is running');
  console.log('PLACE', place, 'SESSIONID', sessionId);
  return fetch(`${API_BASE_URL}/api/places`, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({place, sessionId})
  })
    .then(res => {if (res.ok) return res.json();})
    .then((place) => dispatch(addPlaceSuccess(place)))
    .catch(err => {dispatch(addPlaceError(err));
    });
};

//Creating a unique session upon clicking 'Lets get started!'
export const createSession = () => (dispatch) => {
  console.log('Create session is running');
  dispatch(newSessionRequest());
  return fetch(`${API_BASE_URL}/api/session`, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    }
  })
    .then(res => {if (res.ok) return res.json();})
    .then(({sessionId}) => {
      dispatch(newSessionSuccess(sessionId));
    })
    .catch(err => {dispatch(newSessionError(err));
    });
};