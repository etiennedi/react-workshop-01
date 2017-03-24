import { ajax } from 'rxjs/observable/dom/ajax';
import { MOUNTED, received } from '../ducks/pokemon';

export default function fetchPokemon(action$) {
  return action$.ofType(MOUNTED)
    .switchMap(() =>
      ajax.getJSON('http://pokeapi.co/api/v2/pokemon')
        .map(({ results }) => received(results)),
    );
}
