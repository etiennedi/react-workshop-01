import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct as addProductActionCreator } from './ducks/products';

const propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const Products = ({ products, addProduct }) => (
  <div>
    { JSON.stringify(products, null, 2)}
    <button onClick={() => addProduct('Foo')}>Add product</button>
  </div>
);

Products.propTypes = propTypes;

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addProduct: addProductActionCreator,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
