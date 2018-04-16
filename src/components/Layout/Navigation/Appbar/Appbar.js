import React from "react";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import RaisedButton from "material-ui/RaisedButton";


const AppBarExampleIcon = () => {
  return (
   <Toolbar>
    <ToolbarTitle text="CYTO AI"  style={{whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: "0px",
    paddingTop: "0px",
    letterSpacing: "0px",
    fontSize: "24px",
    fontWeight: "400",
    color: "rgb(255, 255, 255)",
    height: "64px",
    lineHeight: "64px",
    flex: "1 1 0%",}}/>

      <ToolbarGroup style={{position: "absolute", left: "26%"}}firstChild={true}>
        
        <RaisedButton
          label="Run"
          backgroundColor="#FFAB00"
          style={{ width: "100px" }}
        />

        <RaisedButton
          label="Export"
          secondary={true}
          style={{ width: "100px" }}
        />
      </ToolbarGroup>

    </Toolbar>
  );
};

export default AppBarExampleIcon;
