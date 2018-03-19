import React, { Component } from 'react';
import Aux from '../../../../../hoc/Aux';
import Image from './Image/Image'


class GridListExampleSimple extends Component{
  
  render() {

      let picturesThere = false;
      if(this.props.noPicturesDisplayed > 0){
        picturesThere = true;
      }
      const images = picturesThere ? (
        this.props.uploadedPictures.slice(0, this.props.noPicturesDisplayed).map((image, i) => (              
          <Image 
            myKey={image.fileName}
            mySrc={image.src}
           />
    ))

      ) : (
        <p>Nothing here </p>
      );

      return (
        <Aux id='list'> 
          {images}
        </Aux>
      );
    }; 
};
 
export default GridListExampleSimple;
