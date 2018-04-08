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

let myarray = [];


class Input extends Component {
    
    variables = []

    
    // Reads data from input 
    handleChange = (files) => {
        let my = this
        const noImages = files.length;
        for(let i = 0; i < noImages; i++){
          const reader = new FileReader();
          const image = files[i];
          // Closure to capture the file information.
          reader.onload = (function(theFile, my) {
                              const fileName = theFile.webkitRelativePath;
                              return function(e) {
                                var img = new Image;
                                img.onload = function() {
                                  my.props.checkWidth(img.width);
                                  //console.log("The width of the image is " + img.width + "px.");
                                };
                                img.src = e.target.result;
                                
                                const imData = {fileName: fileName, src: e.target.result};
                                //my.variables.push(imData)
                                //console
                                
                                //my.myarray.push(imData) 
                                //console.log(imData)
                                my.props.upload(imData)
                              
                              };
          })(image, my);
        // Read in the image file as a data URL.
        reader.readAsDataURL(image);
        };
        //console.log()
        //my.props.upload(this.variables)
        
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
                style={{width:"100%"}}
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
