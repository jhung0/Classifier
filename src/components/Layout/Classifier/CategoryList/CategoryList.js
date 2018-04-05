import React from "react";
import classes from "../../../../styles/CategoryList/CategoryList.css";
import List, { ListItem } from "material-ui/List";
import TextField from "material-ui-next/TextField";
import Avatar from "material-ui/Avatar";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import FileInput from "./FileInput/FileInput";

const CategoryList = props => {
  return (
    <div className={classes.root}>
      <FileInput upload={props.uploadImage} checkWidth={props.checkImWidth}/>
      <List>
        {props.categories.map(category => (
          <ListItem
            key={category.id}
            leftAvatar={
              <Avatar
                style={{ position: "absolute", top: "16px" }}
                backgroundColor={category.color !== "#FFFFF" ? category.color : "#CCCC"}
              />
            }
            rightIconButton={
              <DeleteIcon id={category.id} onClick={(e)=>{props.delete(e)}}style={{ position: "absolute", top: "27px", marginRight: '10px' }} />
            }
          >
            <TextField
              value={category.name}
              onChange={(e)=>{props.changed(e)}}
              id={category.id.toString()}
              key={category.id + "TextField"}
              style={{ width: "80%", height: "37px", marginLeft: "20px" }}
            />   
          </ListItem>
        ))}

        <FloatingActionButton
          mini={true}
          disabled={false}
          style={{ position: "relative", left: "45%", margin: "5px" }}
          onClick={()=> {props.clicked()}}
        >
          <ContentAdd />
        </FloatingActionButton>
      </List>
    </div>
  );
};

export default CategoryList;
