import React, { Component } from 'react';
import Lightbox from 'react-images';

class ImageLightBox extends Component {
  state = {
    lightBoxIsOpen: true,
    currentImage: this.props.position,
    images: []
  };

  static getDerivedStateFromProps(props, state) {
    if (props.images) {
      const images = [];
      props.images.forEach(item => {
        images.push({ src: `${item}` });
      });

      return (state = {
        images
      });
    }

    return false;
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  closeLightBox = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.state.images}
        isOpen={this.state.lightBoxIsOpen}
        onClickPrev={() => this.gotoPrevious()}
        onClickNext={() => this.gotoNext()}
        onClose={() => this.closeLightBox()}
      />
    );
  }
}

export default ImageLightBox;
