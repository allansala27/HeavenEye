import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
    
class Home extends Component {
    
    playGame = () => {
        this.props.navigation.navigate('Game');
    };

    render() {
        return (
            <View>  
                <Button
                    title="Play"
                    onPress={this.playGame}
                />
            </View>
        );
    }
}



export default Home;
