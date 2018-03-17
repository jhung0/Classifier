import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Classifier from './components/Layout/Classifier/Classifier';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  
  render () {
    
    const muiTheme = getMuiTheme({
      appBar: {
        height: 60,
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

export default App;
