import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar'
import GridLists from './GridLists/GridLists'
import Constants from '../../Constants'


class Classifier extends Component {  
    
    state = {
        noFetch: 5,
        uploadedPictures: [],
        noPicsGrids: {
            top: 0,
            left: 0,
            right: 0    
        },
        displayedPictures: {
            top: [],
            left: [],
            right: []
        }
    };

    fetchButtonClicked = () => {
        if(this.props.uploadedPictures.length === 0){
            alert('Please select folder with pictures');
            return
        }    
        if(this.props.uploadedPictures.length < this.props.noPicsGrids['top'] + Number(this.props.noFetch)){
            alert('There are no more pictures in your uploaded folder');
            this.props.changeNoPicsGrid('top', this.props.uploadedPictures.length)            
            return
        }
        if( this.props.noPicsGrids['top'] + Number(this.props.noFetch) > Constants.MAX_NUMBER_PICTURES_GRID){
            alert('You have reached the maximum no of displayable pictures');
            this.props.changeNoPicsGrid('top', Constants.MAX_NUMBER_PICTURES_GRID)
            return
        }
        let newNoPictures = this.props.noPicsGrids['top'] + Number(this.props.noFetch); 
        let updatePicDisp = {...this.props.displayedPictures}
        const target = this.props.uploadedPictures.slice(0, newNoPictures);
        updatePicDisp.top = target 
        this.props.updateDisplayedPictures(updatePicDisp)
        this.props.changeNoPicsGrid('top', newNoPictures)
    };

    handlePictureDrop = (imInfo) => {
        // Check if element origin is same as drop target
        if(imInfo.origin === imInfo.target){
            return null;
        }
        // Update image counter 
        this.props.decNoPicsGrid(imInfo.origin)
        this.props.incNoPicsGrid(imInfo.target)
        // Put image to different grid
        this.props.changePicturePosition(imInfo.origin, imInfo.target, imInfo.fileName)
    };

    render () {
        return (
            <Aux>
                <Toolbar 
                    fetchButtonClicked={this.fetchButtonClicked}
                    uploadPicture={this.props.uploadPicture}
                    changeNoFetch={this.props.changeNoFetch}
                />
                <GridLists 
                    noPicturesDisplayed={this.props.noPicsGrids['top']}
                    handlePictureDrag={this.handlePictureDrop}                
                    displayedPictures={this.props.displayedPictures}
                />
            </Aux>
        );
    };
};

const mapStateToProps = state => {
    return {
        noFetch: state.noFetch,
        noPicsGrids: state.noPicsGrids,
        uploadedPictures: state.uploadedPictures,
        displayedPictures: state.displayedPictures
    };    
};

const mapDispatchToProps = dispatch => {
   return {
        changeNoFetch: (no) => dispatch({type: 'CHANGE_NO_FETCH', val: no}),
        changeNoPicsGrid: (gridName, no) => dispatch({type: 'CHANGE_NO_PICS_GRID', grid: gridName, val: no}),
        incNoPicsGrid: (gridName) => dispatch({type: 'INC_NO_PICS_GRID', grid: gridName}),
        decNoPicsGrid: (gridName) => dispatch({type: 'DEC_NO_PICS_GRID', grid: gridName}),
        uploadPicture: (img) => dispatch({type: 'UPLOAD_PICTURE', image: img}),
        updateDisplayedPictures: (updatedState) => dispatch({type: 'UPDATE_DISP_PICS', updated: updatedState}),
        changePicturePosition: (origin=null, target=null, filePath=null) => dispatch({type: 'CHANGE_PICTURE_POSITION', origin: origin, target: target, filePath: filePath})
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classifier);