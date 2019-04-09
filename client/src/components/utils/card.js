import React, { Component } from 'react';
import MyButton from './button';

import { connect } from 'react-redux';
import { addToUserCart } from '../../actions/user_actions';

class Card extends Component {
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return '/images/image_not_available.png';
    }
  }

  render() {
    return (
      <div className={`card_item_wrapper ${this.props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(
              this.props.images
            )}) no-repeat`
          }}
        />
        <div className="action_container">
          <div className="tags">
            <div className="brand">{this.props.brand.name}</div>
            <div className="name">{this.props.name}</div>
            <div className="name">${this.props.price}</div>
          </div>

          {this.props.grid ? (
            <div className="description">
              <p>{this.props.description}</p>
            </div>
          ) : null}

          <div className="actions">
            <div className="button_wrapp">
              <MyButton
                type="default"
                altClass="card_link"
                title="View product"
                linkTo={`/product_detail/${this.props._id}`}
                addStyles={{
                  margin: '10px 0 0 0'
                }}
              />
            </div>

            <div className="button_wrapp">
              <MyButton
                type="bag_link"
                runAction={() => {
                  // console.log('Added to card');
                  this.props.user.userData.isAuth
                    ? this.props.dispatch(addToUserCart(this.props._id))
                    : console.log('You need to log in!');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Card);
