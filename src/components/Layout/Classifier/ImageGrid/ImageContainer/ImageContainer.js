import React, { Component } from "react";
import Aux from "../../../../../hoc/_Aux";
import classes from "../../../../../styles/ImageGrid/ImageGrid.css";
import Img from "./Image/Image";

// This component includes the image and attaches a small bar under the image

class ImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  }

  render() {
    return (
      <Aux>
        <div
          key={this.props.id + "Wrapper"}
          className={classes.card}
          onClick={this.onClick}
          style={{
            position: "relative",
            width: this.props.width < 300 ? this.props.width : "30%",
            margin: "5px"
          }}
        >
          <Img
            key={this.props.id + "Img"}
            id={this.props.id}
            src={this.props.image.src}
            accuracy={this.props.image.accuracy}
            category={this.props.image.category}
            drop={this.props.drop}
          />

          <div
            key={this.props.id + "Tile"}
            className={classes.card2}
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              width: "100%",
              height: "40px",
              backgroundColor: "white"
            }}
          >
            <div
              key={this.props.id + "TileBar"}
              style={{
                left: "0px",
                width: "15px",
                height: "100%",
                backgroundColor: this.props.image.color
              }}
            />
          </div>
        </div>
      </Aux>
    );
  }
}

export default ImageContainer;
