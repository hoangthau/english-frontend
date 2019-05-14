import React from "react";

import View from "./View";
import "./styles.css";

class SlideShow extends React.Component {
  state = {
    currentImage: 0
  };

  init = () => {
    setInterval(() => {
      let pos = this.state.currentImage + 1;
      if (pos > this.props.images.length - 1) {
        pos = 0;
      }
      this.setState({ currentImage: pos });
    }, 3000);
  };

  componentDidMount() {
    this.init();
  }

  render() {
    const { images, position } = this.props;
    const { currentImage } = this.state;
    return (
      <View images={images} currentImage={currentImage} position={position} />
    );
  }
}

export default SlideShow;
