import React, {Component} from "react";
import classes from "../../../../styles/CategoryList/CategoryList.css";
import List from "material-ui/List";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import FileInput from "./FileInput/FileInput";
import CategoryItem from "./CategoryItem/CategoryItem"

// This components holds all categories 
class CategoryList extends Component{
  
  shouldComponentUpdate (nextProps, nextState){
    return nextProps.categories.length !== this.props.categories.length;
  }
  
  render (){
  return (
    <div className={classes.root}>
      <FileInput upload={this.props.uploadImage} checkWidth={this.props.checkImWidth}/>
      <List>
        {this.props.categories.map((category, index) => (    
          <CategoryItem key={index + "CatItem"} category={category} changed={this.props.changed} clicked={this.props.clicked} delete={this.props.delete}/>
        ))}

        <FloatingActionButton mini={true} disabled={false} style={{ position: "relative", left: "45%", margin: "5px" }} onClick={()=> {this.props.clicked()}}>
          <ContentAdd />
        </FloatingActionButton>
      
      </List>
    </div>
  );
}
};

export default CategoryList;
