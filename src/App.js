import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Classifier from './components/Layout/Classifier/Classifier';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class App extends Component {
  
  render () {
    
    const muiTheme = getMuiTheme({
      toolbar: {
        height: 60,
        backgroundColor: 'rgb(0, 188, 212)'
      },
    });
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <Classifier/>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
