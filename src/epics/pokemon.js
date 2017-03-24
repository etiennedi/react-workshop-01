import { Observable } from 'rxjs';
import { MOUNTED, received, error } from '../ducks/pokemon';

export default function fetchPokemon(action$, _, { api }) {
  return action$.ofType(MOUNTED)
    .switchMap(api.getPokemon)
    .map(({ data: { results } }) => received(results))
    .catch(err => Observable.of(error(err)));
}
