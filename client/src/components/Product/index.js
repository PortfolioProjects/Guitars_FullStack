import React, { Component } from 'react';
import PageTop from '../utils/page_top';
import ProductInfo from './product_info';
import ProductImages from './product_images';

import { connect } from 'react-redux';
import {
  getProductDetail,
  clearProductDetail
} from '../../actions/products_actions';
import { addToUserCart } from '../../actions/user_actions';

class ProductPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(response => {
      if (!this.props.products.prodDetail) {
        // console.log('No article found');
        this.props.history.push('/');
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  addToUserCartHandler(id) {
    this.props.dispatch(addToUserCart(id));
  }

  render() {
    return (
      <div>
        <PageTop title="Product Details" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: '500px' }}>
                  <ProductImages detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProductInfo
                  addToUserCart={id => this.addToUserCartHandler(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          ) : (
            'Loading'
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductPage);
