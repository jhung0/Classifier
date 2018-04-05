import React from "react";
import classes from "../../../../styles/CategoryList/CategoryList.css";
import List from "material-ui/List";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import FileInput from "./FileInput/FileInput";
import CategoryItem from "./CategoryItem/CategoryItem"

const CategoryList = props => {
  return (
    <div className={classes.root}>
      <FileInput upload={props.uploadImage} checkWidth={props.checkImWidth}/>
      <List>
        {props.categories.map(category => (    
          <CategoryItem category={category} changed={props.changed} clicked={props.clicked} delete={props.delete}/>
        ))}

        <FloatingActionButton mini={true} disabled={false} style={{ position: "relative", left: "45%", margin: "5px" }} onClick={()=> {props.clicked()}}>
          <ContentAdd />
        </FloatingActionButton>
      
      </List>
    </div>
  );
};

export default CategoryList;
