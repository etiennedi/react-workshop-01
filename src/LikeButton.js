import React from 'react';

const LikeButton = ({ likes, onClick }) => (
  <button
    onClick={onClick}
    style={{ backgroundColor: likes ? '#4169E1' : '#D3D3D3' }}
  >
    I have { likes } likes, but you can click me!
  </button>
);

export default LikeButton;
