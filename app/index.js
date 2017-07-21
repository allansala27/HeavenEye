import React, { Component } from 'react';
import { Screens } from './config/router';

class App extends Component {
  	render() {
        return (
            <Screens hideNavBar={true}  />
        );
    }
}

export default App;
