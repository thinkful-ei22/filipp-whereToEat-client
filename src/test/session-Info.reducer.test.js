/* global expect */

import reducer from '../reducers/session-Info.reducer';

import {
  setLocation,
  newSessionRequest,
  newSessionSuccess,
  newSessionError
} from '../actions/session-Info.actions';

describe('Reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.sessionId).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
    expect(state.userLocation).toEqual(null);
  });

  it('Should return the current state of an unkown action', () => {
    let currentState ={};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});

describe('setLocation', () => {
  it('Should set the location', () => {
    let state = {
      sessionId: null,
      loading: false,
      error: null,
      userLocation: null
    };
    const userLocation = 'Everest';
    state = reducer(state, setLocation(userLocation));
    expect(state.sessionId).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
    expect(state.userLocation).toEqual(userLocation);
  });
});

describe('newSessionRequest', () => {
  it('Should make a new request', () => {
    let state = {
      sessionId: null,
      loading: false,
      error: null,
      userLocation: null
    };
    state = reducer(state, newSessionRequest());
    expect(state.sessionId).toEqual(null);
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
    expect(state.userLocation).toEqual(null);
  });
});

describe('newSessionSuccess', () => {
  it('Should make a new session', () => {
    let state = {
      sessionId: null,
      loading: true,
      error: null,
      userLocation: null
    };
    const sessionId = 'randomSessionId';
    state = reducer(state, newSessionSuccess(sessionId));
    expect(state.sessionId).toEqual(sessionId);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
    expect(state.userLocation).toEqual(null);
  });
});

describe('newSessionError', () => {
  it('Should return an error', () => {
    let state = {
      sessionId: null,
      loading: true,
      error: null,
      userLocation: null
    };
    const error = 'BIG error';
    state = reducer(state, newSessionError(error));
    expect(state.sessionId).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(error);
    expect(state.userLocation).toEqual(null);
  });
});