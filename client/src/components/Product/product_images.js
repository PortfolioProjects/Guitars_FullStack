import React, { Component } from 'react';
import ImageLightBox from '../utils/light_box';

class ProductImages extends Component {
  state = {
    lightBox: false,
    imagePosition: 0,
    lightBoxImages: []
  };

  componentDidMount() {
    if (this.props.detail.images.length > 0) {
      let lightBoxImages = [];

      this.props.detail.images.forEach(item => {
        lightBoxImages.push(item.url);
      });

      this.setState({
        lightBoxImages
      });
    }
  }

  renderCardImage = images => {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return `/images/image_not_available.png`;
    }
  };

  handleLightBox = position => {
    if (this.state.lightBoxImages.length > 0) {
      this.setState({
        lightBox: true,
        imagePosition: position
      });
    }
  };

  handleLightBoxClose = () => {
    this.setState({
      lightBox: false
    });
  };

  showThumbs = () =>
    this.state.lightBoxImages.map(
      (item, i) =>
        i > 0 ? (
          <div
            key={i}
            onClick={() => this.handleLightBox(i)}
            className="thumb"
            style={{ background: `url(${item}) no-repeat` }}
          />
        ) : null
    );

  render() {
    const { detail } = this.props;

    console.log(this.state);
    return (
      <div className="product_image_container">
        <div className="main_pic">
          <div
            style={{
              background: `url(${this.renderCardImage(
                detail.images
              )}) no-repeat`
            }}
            onClick={() => this.handleLightBox(0)}
          />
        </div>
        <div className="main_thumbs">{this.showThumbs(detail)}</div>

        {this.state.lightBox ? (
          <ImageLightBox
            id={detail.id}
            images={this.state.lightBoxImages}
            open={this.state.open}
            position={this.state.imagePosition}
            onClose={() => this.handleLightBoxClose()}
          />
        ) : null}
      </div>
    );
  }
}

export default ProductImages;
