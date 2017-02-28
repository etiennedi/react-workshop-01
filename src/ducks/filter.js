const SET = 'todo-app/filter/set';

export default function reducer(state = 'all', action) {
    switch (action.type) {
        case SET:
            return action.filterBy;

        default:
            return state;
    }
};

export function setFilter(filterBy) {
    return { type: SET, filterBy }
}
