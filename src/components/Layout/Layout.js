import React from 'react';
import classes from '../../styles/Layout/Layout.css'
import Aux from '../../hoc/Aux';
import Appbar from './Navigation/Appbar/Appbar'

// Layour component to seperate classifier from future components
const layout = ( props ) => (
    <Aux>
        <Appbar/>
        <main className={classes.Content} >
            {props.children}
        </main>
    </Aux>
);

export default layout;