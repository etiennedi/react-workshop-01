import { getPokemon } from './pokemon';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { received } from '../ducks/pokemon';


describe('getPokemon', () => {
  const saga = getPokemon();

  it('calls axios.get with the pokeapi url', () => {
    expect(saga.next().value).toEqual(call(axios.get, 'http://pokeapi.co/api/v2/pokemon'));
  });

  it('dispatches an action with the results list ', () => {
    const returnValue = {
      data: {
        results: ['foo', 'bar'],
      },
    };

    expect(saga.next(returnValue).value).toEqual(put(received(['foo', 'bar'])));
  });

  it('is done', () => {
    expect(saga.next().done).toEqual(true);
  });
});
