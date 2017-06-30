import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Screens } from './config/router';

class App extends Component {
  render() {
        return (
            <View>
                <Text>
                    Heaven Eye
                </Text>    
                <Button
                    title="Play"
                    // onPress={() => this.props.navigation.navigate('Menu')}
                />
            </View>
        );
    }
}

export default App;
