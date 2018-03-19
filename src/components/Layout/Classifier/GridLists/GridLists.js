import React, { Component } from 'react';
import GridListTop from './GridListTop/GridListTop'
import GridListLeft from './GridListLeft/GridListLeft'
import GridListRight from './GridListRight/GridListRight'

const styles = {
    wrapper: {
        width: '100%',
        height: '300px',
        margin: '10px',
    }, 
};

class GridLists extends Component  {

    render () {
        return(
        <div>
            <GridListTop
                noPicturesDisplayed={this.props.noPicturesDisplayed}
                displayedPictures={this.props.displayedPictures.top}
                handlePictureDrag={this.props.handlePictureDrag}   
            />
           
            <div style={styles.wrapper}>
                 <GridListLeft displayedPictures={this.props.displayedPictures.left} handlePictureDrag={this.props.handlePictureDrag}/>
                 <GridListRight displayedPictures={this.props.displayedPictures.right}  handlePictureDrag={this.props.handlePictureDrag}/>
            </div>
        </div>)
  };
};
 
export default GridLists;
