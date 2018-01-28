const ADD = 'workshop/products/add';

const initialState = [
  'I am a sample product',
];

export default function reducer(state = initialState, action) {
  return state;
}

export const addProduct = title => ({
  type: ADD,
  title,
});
