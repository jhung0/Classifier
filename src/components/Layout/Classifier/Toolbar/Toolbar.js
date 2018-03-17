import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SelectField from './SelectField/SelectField'
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FileInput from './FileInput/FileInput'

const ToolbarExamplesSimple = (props) => (
      <Toolbar>  

        <ToolbarGroup firstChild={true}>
          <RaisedButton  label="Train" primary={true}  icon={<ActionAndroid />}/>
          <RaisedButton  label="Evaluate" primary={true} />
        </ToolbarGroup>
        
        <ToolbarGroup>
          <FileInput uploadPictures={props.uploadPictures}/>
          <SelectField selectNoPicAdd={props.selectNoPicAdd}/>
          <RaisedButton onClick={() => props.FetchButtonClicked()} label="Fetch" primary={true} />
        </ToolbarGroup>
      
      </Toolbar>
);

export default ToolbarExamplesSimple