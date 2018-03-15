import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar'
import GridLists from './GridLists/GridLists'

class Classifier extends Component {  
    
    state = {
        counter: 0,
        noFetch: 0,
        noPicturesDisplayed: 0,
    };

    fetchButtonClicked = () => {
        let oldcounter = this.state.counter; 
        oldcounter = oldcounter + 1;
        this.setState({counter: oldcounter});
        let newNoPictures = this.state.noPicturesDisplayed + Number(this.state.noFetch);        
        this.setState({noPicturesDisplayed: newNoPictures})
    };

    selectNoPicAdd = (no) =>{
        this.setState({noFetch: no})
    }

    render () {
        console.log(this.state.noPicturesDisplayed)
        return (
            <Aux>
                <Toolbar 
                    FetchButtonClicked={this.fetchButtonClicked}
                    selectNoPicAdd={this.selectNoPicAdd}
                />
                <GridLists noPicturesDisplayed={this.state.noPicturesDisplayed}/>
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