import React from 'react';
import AppBar from 'material-ui/AppBar';
import Cake from 'material-ui/svg-icons/social/cake';
import IconButton from 'material-ui/IconButton';


const AppBarExampleIcon = () => {
    return(
        <AppBar style={{ position: 'fixed',top: 0,left: 0, width: '100%'}}
            title=" Cell Classifier"
            iconElementLeft={<IconButton><Cake/></IconButton>}
        />        
    )
};

export default  AppBarExampleIcon;