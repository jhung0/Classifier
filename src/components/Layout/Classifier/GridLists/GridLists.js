import React from 'react';
import GridList from './GridList/GridList';
import Aux from '../../../../hoc/Aux';

const styles = {

    wrapper: {
        width: '100%',
        height: '200px',
        backgroundColor: '#f1f1f1',
        margin: '10px',
    },

    wrapper2: {
        width: '100%',
        height: '300px',
        margin: '10px',
    },

    flexContainer: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: '300px',
        margin: '10px',
      },

    flexContainer1: {
        backgroundColor: '#f1f1f1',
        float: 'left',
        width: '50%',
        height: '300px',
    },

    flexContainer2: {
        backgroundColor: '#f1f1f1',
        float: 'right',
        width: '48%',
        height: '300px',  
    },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridLists = (props) => (
 <Aux>
    <div style={styles.wrapper}>
        <GridList noPicturesDisplayed={props.noPicturesDisplayed}/>
    </div>
    <div style={styles.wrapper2}>
        <div style={styles.flexContainer1}> <GridList noPicturesDisplayed='0'/> </div>
        <div style={styles.flexContainer2}> <GridList noPicturesDisplayed='0'/> </div>
    </div>
  </Aux>
);
 
export default GridLists;
