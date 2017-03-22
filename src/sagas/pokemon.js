import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { MOUNTED, received } from '../ducks/pokemon';

export function* getPokemon() {
  const result = yield call(axios.get, 'http://pokeapi.co/api/v2/pokemon');
  yield put(received(result.data.results));
}

export default function* pokemonSagas() {
  yield takeLatest(MOUNTED, getPokemon);
}
