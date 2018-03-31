import React, { Component } from 'react';
import Image from '../Image/Image'
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../../../ItemTypes'
import Constants from '../../../../Constants'



const styles = {
  wrapper: {
      flexWwrap: 'wrap',
      width: '100%',
      minHeight: '150px',
      resize: 'both',
      backgroundColor: '#C1C1C1',
      overflow: 'hidden' 

  },   
};

const gridTarget = {
  drop(props, monitor) {
      return {
          grid: 'top'
      }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class GridListMain extends Component{
  
  render() {      
      let counter = this.props.noPicturesDisplayed;
      const {connectDropTarget} = this.props;
      let picturesThere = false;
      if(this.props.noPicturesDisplayed > 0){
        picturesThere = true;
      }
      if(this.props.noPicturesDisplayed >= Constants.MAX_NUMBER_PICTURES_GRID){
        counter = Constants.MAX_NUMBER_PICTURES_GRID;
      }
      const images = picturesThere ? (
        this.props.displayedPictures.slice(0, counter).map((image, i) => (              
          <Image grid='top' key={image.fileName + 'top'} fileName={image.fileName} src={image.src}  handlePictureDrop={this.props.handlePictureDrop}/>
        ))  
      ) : (
        <p> Please select folder and fetch pictures </p> 
      );
    return connectDropTarget(<div style={styles.wrapper} > {images} </div>);
    }; 
};

export default DropTarget(ItemTypes.IM, gridTarget, collect)(GridListMain);
