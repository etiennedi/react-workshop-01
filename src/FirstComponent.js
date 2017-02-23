import React from 'react';
import Likes from './Likes';

const FirstComponent =  () => (
  <div>
    <h1>Hello world!</h1>
    <p>
      Click the button to increase likes: <br />
      <Likes />
    </p>
  </div>
);

export default FirstComponent;
