import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar'
import GridLists from './GridLists/GridLists'

class Classifier extends Component {  
    
    state = {
        noFetch: 0,
        noPicturesDisplayedMainGrid: 0,
        noPicturesDisplayedSecondGrid: 0,
        noPicturesDisplayedThirdGrid: 0,
        uploadedPictures: [],
    };

    fetchButtonClicked = () => {
        
        if(this.state.uploadedPictures.length === 0){
            alert('Please select folder with pictures')
            return
        }    
        
        if(this.state.noFetch === 0){
            alert('Please select amount of pictures you want to fetch')
            return
        }
        if(this.state.uploadedPictures.length < this.state.noPicturesDisplayedMainGrid + Number(this.state.noFetch)){
            this.setState({noPicturesDisplayedMainGrid: this.state.uploadedPictures.length})
            return
        }
        let newNoPictures = this.state.noPicturesDisplayedMainGrid + Number(this.state.noFetch);        
        this.setState({noPicturesDisplayedMainGrid: newNoPictures})
    };

    selectNoPicAdd = (no) =>{
        this.setState({noFetch: no})
    }

    uploadPictures = (imData) => {
        let newArray = [...this.state.uploadedPictures];
        newArray.push(imData);
        this.setState({uploadedPictures: newArray});
    }

    render () {
        return (
            <Aux>
                <Toolbar 
                    FetchButtonClicked={this.fetchButtonClicked}
                    uploadPictures={this.uploadPictures}
                    selectNoPicAdd={this.selectNoPicAdd}
                />
                <GridLists 
                    noPicturesDisplayed={this.state.noPicturesDisplayedMainGrid}
                    uploadedPictures={this.state.uploadedPictures}
                />
            </Aux>
        );
    }
}

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