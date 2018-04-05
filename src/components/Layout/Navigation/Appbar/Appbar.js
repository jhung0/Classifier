import React from "react";
import classes from "../../../../styles/Appbar/Appbar.css"
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import RaisedButton from "material-ui/RaisedButton";

const AppBarExampleIcon = () => {
  return (
    <Toolbar
      className={classes.root}
      title="CYTO AI"
    >
      <ToolbarGroup>
        <ToolbarTitle text="CYTO AI" />
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
