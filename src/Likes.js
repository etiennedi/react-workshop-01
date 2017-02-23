import React, { Component } from 'react';
import LikeButton from './LikeButton';

class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          likes: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        likes: this.state.likes + 1,
      });
    }

    render() {
        return (
          <LikeButton
            likes={this.state.likes}
            onClick={this.handleClick}
          />
        );
    }
}
export default Likes;
