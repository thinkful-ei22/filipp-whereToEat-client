import reducer from '../reducers/places-Info.reducer';

import {
  fetchPlacesRequest,
  fetchPlacesSuccess,
  fetchPlacesError,
  fetchMostPopPlaceRequest,
  fetchMostPopPlaceSuccess,
  fetchMostPopPlaceError,
  addPlaceSuccess,
  addPlaceError,
  detelePlaceRequest,
  deletePlaceSuccess,
  deletePlaceError
} from '../actions/places-Info.actions';

describe('Reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
  });

  it('Should return the current state of an unkown action', () => {
    let currentState ={};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});

describe('fetchPlacesRequest', () => {
  it('Should make a request', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: false,
      error: null
    };
    state = reducer(state, fetchPlacesRequest());
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });
});

describe('fetchPlacesSuccess', () => {
  it('Should fetch the places', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: true,
      error: null
    };
    const places = ['Dennys', 'La Palmera'];
    state = reducer(state, fetchPlacesSuccess(places));
    expect(state.places).toEqual(places);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
  });
});

describe('fetchPlacesError', () => {
  it('Should give an error', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: true,
      error: null
    };
    const error = 'BIG error';
    state = reducer(state, fetchPlacesError(error));
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(error);
  });
});

describe('fetchMostPopPlaceRequest', () => {
  it('Should make a request', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: false,
      error: null
    };
    state = reducer(state, fetchMostPopPlaceRequest());
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });
});

describe('fetchMostPopPlaceSuccess', () => {
  it('Should fetch the most popular place', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: true,
      error: null
    };
    const popularPlace = 'La Palmera';
    state = reducer(state, fetchMostPopPlaceSuccess(popularPlace));
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(popularPlace);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
  });
});

describe('fetchMostPopPlaceError', () => {
  it('Should give an error', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: true,
      error: null
    };
    const error = 'BIG error';
    state = reducer(state, fetchMostPopPlaceError(error));
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(error);
  });
});

describe('addPlaceSuccess', () => {
  it('Should add a place', () => {
    let state = {
      places: ['Dennys'],
      popularPlace: null,
      loading: true,
      error: null
    };
    const place = 'La Palmera';
    state = reducer(state, addPlaceSuccess(place));
    expect(state.places).toEqual(['Dennys', place]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
  });
});

describe('addPlaceError', () => {
  it('Should give an error', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: true,
      error: null
    };
    const error = 'BIG error';
    state = reducer(state, addPlaceError(error));
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(error);
  });
});

describe('detelePlaceRequest', () => {
  it('Should make a request', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: false,
      error: null
    };
    state = reducer(state, detelePlaceRequest());
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });
});

describe('deletePlaceSuccess', () => {
  it('Should delete a place', () => {
    let state = {
      places: [{place: 'La palmera', id: 'RandomId'}],
      popularPlace: null,
      loading: true,
      error: null
    };
    const deleteId = 'RandomId';
    state = reducer(state, deletePlaceSuccess(deleteId));
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
  });
});

describe('deletePlaceError', () => {
  it('Should give an error', () => {
    let state = {
      places: [],
      popularPlace: null,
      loading: true,
      error: null
    };
    const error = 'BIG error';
    state = reducer(state, deletePlaceError(error));
    expect(state.places).toEqual([]);
    expect(state.popularPlace).toEqual(null);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(error);
  });
});
