import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
//import './image.css'
import ItemTypes from '../../../../ItemTypes';


const imSource = {
    beginDrag(props) {
      return {  filename: props.fileName,
                grid: props.grid
             };
    },
    endDrag(props, monitor, component){
        if(monitor.didDrop()){
          const imInfo = {target: monitor.getDropResult().grid,  origin: props.grid, fileName: props.fileName }
          component.imageHandlePictureDrop(imInfo)
        }
    }
};
  
function collect(connect, monitor) {
    return { connectDragSource: connect.dragSource(),
             isDragging: monitor.isDragging()
    }
  };

class Image extends Component {

    state = {
      hovering: false
    }

    imageHandlePictureDrop (imInfo) {
      this.props.handlePictureDrop(imInfo);
    }

    onhover (mythis) {   
      mythis.setState({hovering: true})
    }

    onhoverOut (mythis) {   
      mythis.setState({hovering: false})

    }

    render(){
      
      const { connectDragSource } = this.props;   
      return  connectDragSource(
                                <img 
                                     //onMouseOver={() => this.onhover(this)}
                                     //onMouseOut={() => this.unhover(this)}   
                                     grid={this.props.grid} 
                                     src={this.props.src} 
                                     width={48} alt=""/>
                                )    
  }

};

export default   DragSource(ItemTypes.IM, imSource, collect)(Image);