import 'rxjs';

import epicTestHelper from '../test/epicTestHelper';
import pokemonEpic from './pokemon';
import { mounted, received } from '../ducks/pokemon';


describe('pokemon epic', () => {
  it('works', () => {
    const payload = ['pokemon1'];

    const api = {
      getPokemon: () => Promise.resolve({ data: { results: payload } }),
    };

    return epicTestHelper(pokemonEpic, mounted(), {}, { api })
      .then(x => expect(x).toEqual(received(payload)));
  });
});
