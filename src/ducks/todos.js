const ADD = 'todo-app/todos/add';
const DELETE = 'todo-app/todos/delete';
const TOGGLE = 'todo-app/todos/toggle';

const initalState = {
  '000000': {
    id: '000000',
    title: 'I am a sample todo here by default',
    completed: false,
  },
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        [action.id]: action.payload,
      };
    }

    case DELETE: {
      const {
                [action.id]: _,
                ...todosWithoutId
            } = state;
      return todosWithoutId;
    }

    case TOGGLE: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: !state[action.id].completed,
        },
      };
    }

    default:
      return state;
  }
}

export function addTodo(title) {
  const id = Date.now().toString();
  return {
    type: ADD,
    id,
    payload: {
      id,
      title,
      completed: false,
    },
  };
}

export function toggleTodo(id) {
  return { type: TOGGLE, id };
}

export function deleteTodo(id) {
  return { type: DELETE, id };
}
