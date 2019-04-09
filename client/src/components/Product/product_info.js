import React from 'react';
import MyButton from '../utils/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

const ProductInfo = props => {
  const showProductTags = detail => (
    <div className="product_tags">
      {detail.shipping ? (
        <div className="tag">
          <div>
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <div className="tag_text">
            <div>Free shipping</div>
            <div>And return</div>
          </div>
        </div>
      ) : null}
      <div className="tag">
        <div>
          <FontAwesomeIcon icon={detail.available ? faCheck : faTimes} />
        </div>
        <div className="tag_text">
          {detail.available ? (
            <div>
              <div>Available</div>
              <div>in store</div>
            </div>
          ) : (
            <div>
              <div>Not Available</div>
              <div>Preorder only</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const showProductActions = detail => (
    <div className="product_actions">
      <div className="price">$ {detail.price}</div>
      <div className="cart">
        <MyButton
          type="add_to_card_link"
          runAction={() => {
            props.addToUserCart(detail._id);
          }}
        />
      </div>
    </div>
  );

  const showProductSpecifications = detail => (
    <div className="product_specifications">
      <h2>Specs:</h2>
      <div className="item">
        <strong>Frets:</strong> {detail.frets}
      </div>
      <div className="item">
        <strong>Wood:</strong> {detail.wood.name}
      </div>
    </div>
  );

  return (
    <div>
      <h1>
        {props.detail.brand.name} {props.detail.name}
      </h1>
      <p>{props.detail.description}</p>
      {showProductTags(props.detail)}
      {showProductActions(props.detail)}
      {showProductSpecifications(props.detail)}
    </div>
  );
};

export default ProductInfo;
