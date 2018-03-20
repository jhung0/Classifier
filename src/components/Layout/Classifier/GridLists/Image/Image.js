import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../../../../ItemTypes';

//const handlePictureDrag = this.props.handlePictureDrag


const imSource = {
    beginDrag(props) {
      return {  filename: props.fileName,
                grid: props.grid
             };
    },
    endDrag(props, monitor, component){
        if(monitor.didDrop()){
          const imInfo = {target: monitor.getDropResult().grid,  origin: props.grid, fileName: props.fileName }
          component.imageHandlePictureDrag(imInfo)
        }
    }
};
  
function collect(connect, monitor) {
    return { connectDragSource: connect.dragSource(),
             isDragging: monitor.isDragging()
    }
  };

class Image extends Component {

    imageHandlePictureDrag (imInfo) {
      this.props.handlePictureDrag(imInfo)
    }
    
    render(){
      const { connectDragSource } = this.props;   
      return  connectDragSource(<img grid={this.props.grid} src={this.props.src} width={48} alt=""/>)       
  }
};

export default   DragSource(ItemTypes.IM, imSource, collect)(Image);