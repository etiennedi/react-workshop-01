import React from 'react';
import Likes from './Likes';

const FirstComponent =  () => (
  <div>
    <h1>Hello world!</h1>
    <p>
      Has likes: <br />
      <Likes likes={10} />
    </p>
    <p>
      Has no likes: <br />
      <Likes />
    </p>
  </div>
);

export default FirstComponent;
