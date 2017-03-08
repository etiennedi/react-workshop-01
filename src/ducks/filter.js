// @flow

const SET = 'todo-app/filter/set';

type State = string;
type FilterAction = {
  type: string,
  filterBy: string,
}


export default function reducer(state: State = 'all', action: FilterAction) {
  switch (action.type) {
    case SET:
      return action.filterBy;

    default:
      return state;
  }
}

export function setFilter(filterBy: string) : FilterAction {
  return { type: SET, filterBy };
}
