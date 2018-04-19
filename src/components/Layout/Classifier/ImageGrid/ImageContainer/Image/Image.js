import React, { Component } from "react";
import { DragSource } from "react-dnd";
import ItemTypes from "../../../../../ItemTypes";

//  This will pass the returned functions to your component as props
const imSource = {
  beginDrag(props) {
    return {
      id: props.id,
      category: props.category
    };
  },

// When the dragging stops, endDrag is called
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      const catId = monitor.getDropResult().targetCat;
      const imageId = Number(props.id);
      const oldCatId = props.category
      const dropInfo = {
        catId: catId,
        oldCatId: oldCatId,
        imageId: imageId
      };
      component.imageHandlePictureDrop(dropInfo);
    }
  }
};

// This function should return a plain object of the props to inject into your component.
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

// This component is the image itself

class Image extends Component {
  state = {
    hovering: false
  };

  imageHandlePictureDrop(dropInfo) {
    this.props.drop(dropInfo);
  }

  onhover(mythis) {
    mythis.setState({ hovering: true });
  }

  onhoverOut(mythis) {
    mythis.setState({ hovering: false });
  }

  shouldComponentUpdate (nextProps, nextState){
    return false
  }


  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <img
        //onMouseOver={() => this.onhover(this)}
        //onMouseOut={() => this.unhover(this)}
        id={this.props.id}
        src={this.props.src}
        category={this.props.accuracy}
        width={"100%"}
        alt={"Ups"}
        style={{ height: "auto", marginRight: "5px", marginBottom: "35px" }}
      />
    );
  }
}

export default DragSource(ItemTypes.IM, imSource, collect)(Image);
