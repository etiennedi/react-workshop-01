import React from 'react';
import BlueLikeButton from './BlueLikeButton';
import GreyLikeButton from './GreyLikeButton';

const Likes = ({likes}) => {
  if (likes) {
    return <BlueLikeButton />;
  }
  return <GreyLikeButton />;
}

export default Likes;
