import React, { Component } from 'react';
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


class Input extends Component {
    
    
    // Reads data from input 
    handleChange = (files) => {
        let my = this
        const noImages = files.length;
        for(let i = 0; i < noImages; i++){
          const reader = new FileReader();
          const image = files[i];
          // Closure to capture the file information.
          reader.onload = (function(theFile,my) {
                              const fileName = theFile.webkitRelativePath;
                              return function(e) {
                                const imData = {fileName: fileName, src: e.target.result, index: i};
                                my.props.uploadPicture(imData)
                              };
          })(image, my);
        // Read in the image file as a data URL.
        reader.readAsDataURL(image);
        };
      };       
         
        
    _addDirectory(node) {
        if (node) {
          node.directory = true;
          node.webkitdirectory = true;
        }
      }
    
    render (){
        return(
            <RaisedButton 
                variant='raised'
                label="Select Folder"
                labelPosition="before"
                containerElement="label"
            >
                <input 
                    style={styles.exampleImageInput}
                    type="file"
                    accept="image/*"
                    onChange={ (e) => this.handleChange(e.target.files) }
                    ref={node => this._addDirectory(node)}
                />
            </RaisedButton>
        ); 
    } 
};
 
export default Input;
