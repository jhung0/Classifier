import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../../../styles/Classifier/Classifier.css";
import CategoryList from "./CategoryList/CategoryList";
import ImageGrid from "./ImageGrid/ImageGrid";

class Classifier extends Component {
  state = {
    images: {},
    categories: [
      {
        id: 1,
        name: "New category",
        imIds: [],
        color: "#FF4081"
      }
    ],
    biggestImage: 0,
  };

  addButtonClicked = () => {
    console.log(this.props.categories)
    this.props.addCategory();
    console.log(this.props.categories)
  };

  nameChangeHandler = (event) => {
    this.props.changeCatName(event.target.value, event.target.id);
  };

  deleteIconClicked = (event) => {
    this.props.deleteCat(event.currentTarget.id);
  };

  uploadImage = (image) => {
    this.props.uploadImage(image);
  };

  checkImWidth = (width) => {
    if(width > this.state.biggestImage){
      this.setState({biggestImage: width})
    }
  };


  handleImageDrop = dropInfo => {
    this.props.imDropped(dropInfo);
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <CategoryList
          categories={this.props.categories}
          clicked={this.addButtonClicked}
          changed={this.nameChangeHandler}
          delete={this.deleteIconClicked}
          uploadImage={this.uploadImage}
          checkImWidth={this.checkImWidth}          
        />
        <ImageGrid 
          images={this.props.images} 
          maxImWidth={this.state.biggestImage}
          drop={this.handleImageDrop}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: () => dispatch({ type: "ADD_CATEGORY"}),
    changeCatName: (new_name, id) => dispatch({ type: "CHANGE_CAT_NAME", name: new_name, id: id}),
    deleteCat: (id) => dispatch({type: "DELETE_CAT", id: id}),
    uploadImage: (image) => dispatch({type: "UPLOAD_IMAGE", imInfo: image}),
    imDropped: (dropInfo) => dispatch({type: "IM_DROPPED", dropInfo: dropInfo})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classifier);
