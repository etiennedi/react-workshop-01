import React, { PropTypes } from 'react';

const propTypes = {
  likes: PropTypes.number,
  onClick: PropTypes.func,
}

const defaultProps = {
  onClick: () => alert('I am the default click handler')
}

const LikeButton = ({ likes, onClick }) => (
  <button
    onClick={onClick}
    style={{ backgroundColor: likes ? '#4169E1' : '#D3D3D3' }}
  >
    I have {likes} likes, but you can click me!
  </button>
);

LikeButton.propTypes = propTypes;
LikeButton.defaultProps = defaultProps;

export default LikeButton;
