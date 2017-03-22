export const MOUNTED = 'workshop/pokemon/mounted';
export const RECEIVED = 'workshop/pokemon/received';

export default function reducer(state = [], action) {
  switch (action.type) {

    case RECEIVED: {
      return [
        ...state,
        ...action.payload,
      ];
    }

    default:
      return state;
  }
}

export const mounted = () => ({
  type: MOUNTED,
});

export const received = payload => ({
  type: RECEIVED,
  payload,
});
