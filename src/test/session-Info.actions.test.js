import {
  SET_LOCATION,
  setLocation,
  NEW_SESSION_REQUEST,
  newSessionRequest,
  NEW_SESSION_SUCCESS,
  newSessionSuccess,
  NEW_SESSION_ERROR,
  newSessionError
} from '../actions/session-Info.actions';

describe('setLocation', () => {
  it('Should return the action', () => {
    const userLocation = 'Everett_WA';
    const action = setLocation(userLocation);
    expect(action.type).toEqual(SET_LOCATION);
    expect(action.userLocation).toEqual(userLocation);
  });
});

describe('newSessionRequest', () => {
  it('Should return the action', () => {
    const action = newSessionRequest();
    expect(action.type).toEqual(NEW_SESSION_REQUEST);
  });
});

describe('newSessionSuccess', () => {
  it('Should return the action', () => {
    const sessionId = '5b75e65eebb7602da871874a';
    const action = newSessionSuccess(sessionId);
    expect(action.type).toEqual(NEW_SESSION_SUCCESS);
    expect(action.sessionId).toEqual(sessionId);
  });
});

describe('newSessionError', () => {
  it('Should return the action', () => {
    const error = 'BIG Error';
    const action = newSessionError(error);
    expect(action.type).toEqual(NEW_SESSION_ERROR);
    expect(action.error).toEqual(error);
  });
});
