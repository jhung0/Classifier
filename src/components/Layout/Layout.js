import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Appbar from './Navigation/Appbar/Appbar'


const layout = ( props ) => (
    <Aux>
        <Appbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;