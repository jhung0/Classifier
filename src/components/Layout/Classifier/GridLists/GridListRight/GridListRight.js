import React, { Component } from 'react';
import Image from '../Image/Image'
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../../../ItemTypes'

const styles = {
  flexContainer: {
      backgroundColor: '#f1f1f1',
      float: 'right',
      width: '49%',
      height: '300px',  
      border: '1px solid black',
      borderWidth: 'thin',
      resize: 'both'

  },
};

const gridTarget2 = {
  drop(props, monitor) {
      return {
          grid: 'right',
      };     
  }
};

function collect2(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class GridListThird extends Component{
  
  render() {
      const {connectDropTarget, isOver} = this.props;
      let backgroundColor = '#f1f1f1'
      if (isOver) {
        backgroundColor = '#B9F6CA'
      }
      let picturesThere = false;
      if(this.props.displayedPictures.length > 0){
        picturesThere = true;
      }
      const images = picturesThere ? (
        this.props.displayedPictures.map((image, i) => (              
           <Image grid='right' key={image.fileName + 'right'} fileName={image.fileName} src={image.src} handlePictureDrag={this.props.handlePictureDrag}  />
        ))  
      ) : (
       <p>Please drag something here</p>
      );
    return connectDropTarget(<div style={{...styles.flexContainer, backgroundColor}}> {images} </div>);
    }; 
};

export default DropTarget(ItemTypes.IM, gridTarget2, collect2)(GridListThird);