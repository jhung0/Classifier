import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../../../styles/Classifier/Classifier.css";
import CategoryList from "./CategoryList/CategoryList";
import ImageGrid from "./ImageGrid/ImageGrid";

class Classifier extends Component {
  state = {
    uploadedPictures: [],
    categories: [
      {
        uniqueId: 1,
        name: "New category",
        imgHashes: [],
        color: "#FF4081"
      }
    ]
  };

  addButtonClicked = () => {
    this.props.addCategory();
  };

  nameChangeHandler = (event) => {
    this.props.changeCatName(event.target.value, event.target.id);
  };

  deleteIconClicked = (event) => {
    this.props.deleteCat(event.currentTarget.id)
  };

  handlePictureDrop = imInfo => {
    // Check if element origin is same as drop target
    if (imInfo.origin === imInfo.target) {
      return null;
    }
    // Update image counter
    this.props.decNoPicsGrid(imInfo.origin);
    this.props.incNoPicsGrid(imInfo.target);
    // Put image to different grid
    this.props.changePicturePosition(
      imInfo.origin,
      imInfo.target,
      imInfo.fileName
    );
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <CategoryList
          categories={this.props.categories}
          clicked={this.addButtonClicked}
          changed={this.nameChangeHandler}
          delete={this.deleteIconClicked}
        />
        <ImageGrid />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploadedPictures: state.uploadedPictures,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: () => dispatch({ type: "ADD_CATEGORY"}),
    changeCatName: (new_name, id) => dispatch({ type: "CHANGE_CAT_NAME", name: new_name, id: id}),
    deleteCat: (id) => dispatch({type: "DELETE_CAT", id: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classifier);
