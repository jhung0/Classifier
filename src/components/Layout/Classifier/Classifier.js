import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar'
import GridLists from './GridLists/GridLists'
import Constants from './Constants'


class Classifier extends Component {  
    
    state = {
        noFetch: 5,
        noPicsTopGrid: 0,
        uploadedPictures: [],
        displayedPictures: {
            top: [],
            left: [],
            right: []
        }
    };

    fetchButtonClicked = () => {
        if(this.state.uploadedPictures.length === 0){
            alert('Please select folder with pictures');
            return
        }    
        if(this.state.uploadedPictures.length < this.state.noPicsTopGrid + Number(this.state.noFetch)){
            this.setState({noPicsTopGrid: this.state.uploadedPictures.length})
            return
        }
        if( this.state.noPicsTopGrid + Number(this.state.noFetch) > Constants.MAX_NUMBER_PICTURES_GRID){
            this.setState({noPicsTopGrid: Constants.MAX_NUMBER_PICTURES_GRID})
            return
        }

        let newNoPictures = this.state.noPicsTopGrid + Number(this.state.noFetch);        
        let updatePicDisp = {...this.state.displayedPictures}
        const target = this.state.uploadedPictures.slice(0, newNoPictures);
        updatePicDisp.top = target 
        this.setState({displayedPictures: updatePicDisp})
        this.setState({noPicsTopGrid: newNoPictures})        
    };

    selectNoPicAdd = (no) => {
        this.setState({noFetch: no})
    };

    uploadPictures = (imData) => {
        let newArray = [...this.state.uploadedPictures];
        newArray.push(imData);
        this.setState({uploadedPictures: newArray});
    };

    handlePictureDrop = (imInfo) => {
        // Check if element origin is same as drop target
        if(imInfo.origin === imInfo.target){
            return null;
        }
        //U Update Counter 
        if(imInfo.origin === 'top'){
            let newNoPictures = this.state.noPicsTopGrid - 1;    
            this.setState({noPicsTopGrid: newNoPictures})        
        }
        if(imInfo.target === 'top'){
            let newNoPictures = this.state.noPicsTopGrid + 1;    
            this.setState({noPicsTopGrid: newNoPictures})        
        }

        // Find picture by file name in uploaded pictures and update target
        const resultIndex = this.state.displayedPictures[imInfo.origin].findIndex(function( obj, index ) {
        return obj.fileName === imInfo.fileName;
        });
        const result = this.state.displayedPictures[imInfo.origin][resultIndex];
        let updatePicDisp = {...this.state.displayedPictures}
        let target = [...this.state.displayedPictures[imInfo.target]];
        target.push(result);
        updatePicDisp[imInfo.target] = target
        this.setState({displayedPictures: updatePicDisp});
        // Delete picture from origin
        updatePicDisp = {...this.state.displayedPictures}
        let copyOrigin =  [...this.state.displayedPictures[imInfo.origin]];
        if (resultIndex > -1) {
            copyOrigin.splice(resultIndex, 1);
            updatePicDisp[imInfo.origin] = copyOrigin;
            this.setState({displayedPictures: updatePicDisp});
        }
    };

    render () {
        console.log(this.state.noPicsTopGrid)
        return (
            <Aux>
                <Toolbar 
                    FetchButtonClicked={this.fetchButtonClicked}
                    uploadPictures={this.uploadPictures}
                    selectNoPicAdd={this.selectNoPicAdd}
                />
                <GridLists 
                    noPicturesDisplayed={this.state.noPicsTopGrid}
                    handlePictureDrag={this.handlePictureDrop}                
                    displayedPictures={this.state.displayedPictures}
                />
            </Aux>
        );
    };
};

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };    
};

const mapDispatchToProps = dispatch => {
   return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT_COUNTER', val: 5})
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classifier);