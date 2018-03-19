import React, { Component } from 'react';
import Image from '../Image/Image'
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../ItemTypes'


const styles = {
  flexContainer: {
      backgroundColor: '#f1f1f1',
      float: 'left',
      width: '50%',
      height: '300px',
  },
};

const gridTarget1 = {
  drop(props, monitor) {
      return {
          grid: 'left',
      };     
  }
};

function collect1(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class GridListSecond extends Component{
   
  render() {
      const {connectDropTarget, isOver } = this.props;

      let picturesThere = false;
      if(this.props.displayedPictures.length > 0){
        picturesThere = true;
      }
      const images = picturesThere ? (
        this.props.displayedPictures.map((image, i) => (              
            <Image grid='left' key={image.fileName + 'left'} fileName={image.fileName} src={image.src}  handlePictureDrag={this.props.handlePictureDrag}  />
        ))  
      ) : ( 
       <p>Please drag something here</p>
      );
    return connectDropTarget(<div style={styles.flexContainer}> {images} </div>);
    }; 
};

export default  DropTarget(ItemTypes.IM, gridTarget1, collect1)(GridListSecond);
