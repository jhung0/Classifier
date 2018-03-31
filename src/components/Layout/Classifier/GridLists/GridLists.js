import React, { Component } from 'react';
import GridListTop from './GridListTop/GridListTop'
import GridListLeft from './GridListLeft/GridListLeft'
import GridListRight from './GridListRight/GridListRight'

const styles = {
    wrapper: {
        width: '100%',
        height: '300px',
        marginBottom: '15px',
    }, 
};

class GridLists extends Component  {

    render () {
        return(
       
        //<div style={{marginTop: '330px', width: '100%', overflow: 'hidden'}}>

        <div style={{position: 'absolute', marginTop: '1px', width: '100%', height: '550px', overflow: 'scroll' }}>
           
            <div style={styles.wrapper}>
                 <GridListLeft displayedPictures={this.props.displayedPictures.left} handlePictureDrag={this.props.handlePictureDrag}/>
                 <GridListRight displayedPictures={this.props.displayedPictures.right}  handlePictureDrag={this.props.handlePictureDrag}/>   
            </div>
        
            <div style={styles.wrapper}>
                 <GridListLeft displayedPictures={this.props.displayedPictures.left} handlePictureDrag={this.props.handlePictureDrag}/>
                 <GridListRight displayedPictures={this.props.displayedPictures.right}  handlePictureDrag={this.props.handlePictureDrag}/>
                
            </div>

             <div style={styles.wrapper}>

                 <GridListLeft displayedPictures={this.props.displayedPictures.left} handlePictureDrag={this.props.handlePictureDrag}/>
                 <GridListRight displayedPictures={this.props.displayedPictures.right}  handlePictureDrag={this.props.handlePictureDrag}/>
            </div>
        
        
        </div>    

        
        )
  };
};
 
export default GridLists;