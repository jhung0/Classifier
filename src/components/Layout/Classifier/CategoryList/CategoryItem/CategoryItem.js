import React, { Component } from "react";
import { DropTarget } from 'react-dnd';
import ItemTypes from "../../../../ItemTypes";
import { ListItem } from "material-ui/List";
import TextField from "material-ui-next/TextField";
import Avatar from "material-ui/Avatar";
import DeleteIcon from "material-ui/svg-icons/action/delete";

// Called when a compatible item is dropped on the target. 
const gridTarget = {
  drop(props, monitor, component) {
      return {
          targetCat: component.props.category.id  
      }
  }
};

// This function should return a plain object of the props to inject into your component.
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

// This compent is the category item
class CategoryItem extends Component {
  
  render() {
    const {connectDropTarget, isOver} = this.props;
    let backgroundColor = '#FFFFFF'
    if (isOver) {
        backgroundColor = '#B9F6CA'
    }
    return connectDropTarget(
      <div>
        <ListItem
          style={{backgroundColor:  backgroundColor}}
          key={this.props.category.id}
          leftAvatar={ <Avatar style={{ position: "absolute", top: "16px" }} backgroundColor={this.props.category.color !== "#FFFFF" ? this.props.category.color : "#CCCC"}/>}
          rightIconButton={ <DeleteIcon id={this.props.category.id} onClick={(e)=>{this.props.delete(e)}}style={{ position: "absolute", top: "27px", marginRight: '10px' }} />}
        >
          <TextField value={this.props.category.name} onChange={(e)=>{this.props.changed(e)}} id={this.props.category.id.toString()} key={this.props.category.id + "TextField"} style={{ width: "80%", height: "37px", marginLeft: "20px" }}/>   
        </ListItem>
      </div>
    );
  }
}


export default DropTarget(ItemTypes.IM, gridTarget, collect)(CategoryItem);