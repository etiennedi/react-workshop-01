import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mounted } from './ducks/pokemon';

export class About extends Component {

  componentWillMount() {
    this.props.mounted();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h1>My favorite Pokemon</h1>
        <ul>
          {
            pokemon.map(({ name }) => <li key={name}>{name}</li>)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }) => ({ pokemon });

const mapDispatchToProps = dispatch => bindActionCreators({
  mounted,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
