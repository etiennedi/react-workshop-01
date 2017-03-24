import 'rxjs';

import epicTestHelper from '../test/epicTestHelper';
import pokemonEpic from './pokemon';
import { mounted, received, error } from '../ducks/pokemon';


describe('pokemon epic', () => {
  it('dispatches a received action with pokemon', () => {
    const payload = ['pokemon1'];

    const api = {
      getPokemon: () => Promise.resolve({ data: { results: payload } }),
    };

    return epicTestHelper(pokemonEpic, mounted(), {}, { api })
      .then(x => expect(x).toEqual(received(payload)));
  });
  it('dispatches an error action', () => {
    const epicError = new Error('Error');

    const api = {
      getPokemon: () => Promise.reject(epicError),
    };

    return epicTestHelper(pokemonEpic, mounted(), {}, { api })
      .then(x => expect(x).toEqual(error(epicError)));
  });
});
