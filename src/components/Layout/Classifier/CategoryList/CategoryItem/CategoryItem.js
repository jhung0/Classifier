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

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  
  render() {
    const {connectDropTarget, isOver} = this.props;
    let backgroundColor = '#FFFFFF'
    if (this.state.clicked) {
      backgroundColor = '#C8C8C8'
    }
    if (isOver) {
        backgroundColor = '#B9F6CA'
    }
    return connectDropTarget(
      <div>

        <ListItem
          style={{backgroundColor: backgroundColor}}
          key={this.props.category.id}
          leftAvatar={ <Avatar style={{ position: "absolute", top: "16px" }} backgroundColor={this.props.category.color !== "#FFFFF" ? this.props.category.color : "#CCCC"}>
                        <div>
                          <p style={{position: "absolute", top: "-67px", left: "40px", lineHeight: 7, fontSize: "15px", color: "#757575", zIndex: 1}}> {this.props.category.counter} </p> 
                        </div>
                        </Avatar>
          }
          rightIconButton={ <DeleteIcon id={this.props.category.id} onClick={(e)=>{this.props.delete(e)}}style={{ position: "absolute", top: "27px", marginRight: '10px' }} />}
          onClick={() => this.setState({clicked: !this.state.clicked})}
        >
       
          <TextField
            value={this.props.category.name}
            onChange={(e)=>{this.props.changed(e)}}
            id={this.props.category.id.toString()}
            key={this.props.category.id + "TextField"}
            style={{ width: "80%", height: "37px", marginLeft: "20px" }}
          />   
        </ListItem>
      </div>
    );
  }
}


export default DropTarget(ItemTypes.IM, gridTarget, collect)(CategoryItem);