import React, { Component } from "react";
import classes from "../../../../styles/ImageGrid/ImageGrid.css";
import ImageContainer from "./ImageContainer/ImageContainer";

// This component is the image grid in which all images are rendered

class ImageGrid extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.images !== this.props.images;
  }

  render() {
    const images = this.props.images;
    return (
      <div className={classes.root}>
        {Object.keys(images).map((key, index) => (
          <ImageContainer
            id={key}
            key={key}
            image={images[key]}
            width={this.props.maxImWidth}
            drop={this.props.drop}
          />
        ))}
      </div>
    );
  }
}

export default ImageGrid;