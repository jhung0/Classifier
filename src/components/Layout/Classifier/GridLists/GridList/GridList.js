import React, { Component } from 'react';
import Aux from '../../../../../hoc/Aux';


class GridListExampleSimple extends Component{
  
  render() {

      let picturesThere = false;
      if(this.props.noPicturesDisplayed > 0){
        picturesThere = true;
      }
      const images = picturesThere ? (
        this.props.uploadedPictures.slice(1, this.props.noPicturesDisplayed).map((image, i) => (              
          <img 
            key={image.fileName}
            src={image.src}
            width={48}
            alt=""
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
