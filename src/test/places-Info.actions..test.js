import {
  FETCH_PLACES_REQUEST,
  fetchPlacesRequest,
  FETCH_PLACES_SUCCESS,
  fetchPlacesSuccess,
  FETCH_PLACES_ERROR,
  fetchPlacesError,
  FETCH_MOST_POP_PLACE_REQUEST,
  fetchMostPopPlaceRequest,
  FETCH_MOST_POP_PLACE_SUCCESS,
  fetchMostPopPlaceSuccess,
  FETCH_MOST_POP_PLACE_ERROR,
  fetchMostPopPlaceError,
  ADD_PLACE_SUCCESS,
  addPlaceSuccess,
  ADD_PLACE_ERROR,
  addPlaceError,
  DELETE_PLACE_REQUEST,
  detelePlaceRequest,
  DELETE_PLACE_SUCCESS,
  deletePlaceSuccess,
  DELETE_PLACE_ERROR,
  deletePlaceError
} from '../actions/places-Info.actions';

describe('fetchPlacesRequest', () => {
  it('Should return the action', () => {
    const action = fetchPlacesRequest();
    expect(action.type).toEqual(FETCH_PLACES_REQUEST);
  });
});

describe('fetchPlacesSuccess', () => {
  it('Should return the action', () => {
    const places = 'places';
    const action = fetchPlacesSuccess(places);
    expect(action.type).toEqual(FETCH_PLACES_SUCCESS);
    expect(action.places).toEqual(places);
  });
});

describe('fetchPlacesSuccess', () => {
  it('Should return the action', () => {
    const places = 'places';
    const action = fetchPlacesSuccess(places);
    expect(action.type).toEqual(FETCH_PLACES_SUCCESS);
    expect(action.places).toEqual(places);
  });
});

describe('fetchPlacesError', () => {
  it('Should return the action', () => {
    const error = 'BIG Error';
    const action = fetchPlacesError(error);
    expect(action.type).toEqual(FETCH_PLACES_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchMostPopPlaceRequest', () => {
  it('Should return the action', () => {
    const action = fetchMostPopPlaceRequest();
    expect(action.type).toEqual(FETCH_MOST_POP_PLACE_REQUEST);
  });
});

describe('fetchMostPopPlaceSuccess', () => {
  it('Should return the action', () => {
    const popularPlace = 'Dennys';
    const action = fetchMostPopPlaceSuccess(popularPlace);
    expect(action.type).toEqual(FETCH_MOST_POP_PLACE_SUCCESS);
    expect(action.popularPlace).toEqual(popularPlace);
  });
});

describe('fetchMostPopPlaceError', () => {
  it('Should return the action', () => {
    const error = 'BIG Error';
    const action = fetchMostPopPlaceError(error);
    expect(action.type).toEqual(FETCH_MOST_POP_PLACE_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('addPlaceSuccess', () => {
  it('Should return the action', () => {
    const place = 'Dennys';
    const action = addPlaceSuccess(place);
    expect(action.type).toEqual(ADD_PLACE_SUCCESS);
    expect(action.place).toEqual(place);
  });
});

describe('addPlaceError', () => {
  it('Should return the action', () => {
    const error = 'BIG Error';
    const action = addPlaceError(error);
    expect(action.type).toEqual(ADD_PLACE_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('detelePlaceRequest', () => {
  it('Should return the action', () => {
    const action = detelePlaceRequest();
    expect(action.type).toEqual(DELETE_PLACE_REQUEST);
  });
});

describe('deletePlaceSuccess', () => {
  it('Should return the action', () => {
    const deleteId = 'randomId';
    const action = deletePlaceSuccess(deleteId);
    expect(action.type).toEqual(DELETE_PLACE_SUCCESS);
    expect(action.deleteId).toEqual(deleteId);
  });
});

describe('deletePlaceError', () => {
  it('Should return the action', () => {
    const error = 'BIG Error';
    const action = deletePlaceError(error);
    expect(action.type).toEqual(DELETE_PLACE_ERROR);
    expect(action.error).toEqual(error);
  });
});

