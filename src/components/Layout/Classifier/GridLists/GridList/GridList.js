import React, { Component } from 'react';
import Aux from '../../../../../hoc/Aux';

function importAll(r) {
  return r.keys().map(r);
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class GridListExampleSimple extends Component{
    
  render(){    
      const images = importAll(require.context('../../../../../assets/subpop-images/anaphase', false, /\.(png|jpe?g|svg)$/));        
      let noIm = this.props.noPicturesDisplayed
      if(noIm > 50){
        noIm = 50;
        alert('MAX NO PICTURES')
      }
      return (
        <Aux> 
          {images.slice(0,noIm).map((_, i) => (
                <img 
                  key={i}
                  src={images[i]}
                  width={48}
                  alt='Ups there is something wrong'
                 />
          ))}
        </Aux>
      );
    }; 
};
 
export default GridListExampleSimple;
