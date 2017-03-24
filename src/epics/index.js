import { combineEpics } from 'redux-observable';
import fetchPokemon from './pokemon';

export default combineEpics(
  fetchPokemon,
);
