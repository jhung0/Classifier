import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    button: {
      margin: 12,
    },
    exampleImageInput: {
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      opacity: 0,
    },
  };
  
const Input = (props) => {
    return(
        <RaisedButton 
            variant='raised'
            label="Select Folder"
            labelPosition="before"
            containerElement="label"
        >
            <input style={styles.exampleImageInput} label='Select Pictures' type="file"  accept="image/*"/>
        </RaisedButton>
    ); 
};
 
export default Input;
