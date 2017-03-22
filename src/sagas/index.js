import pokemon from './pokemon';

function* mySaga() {
  yield [
    pokemon(),
  ];
}

export default mySaga;
