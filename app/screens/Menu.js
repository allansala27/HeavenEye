import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
    
class Menu extends Component {
    
    goToHomeScreen = () => {
        this.props.navigation.navigate('Home');
    };

    playSingle = () => {
        this.props.navigation.navigate('Single');
    }

    render() {
        return (
            <View> 
                <Button
                    title="Single Player"
                    onPress={this.playSingle}
                />
                <Button
                    title="Multiplayer"
                    // onPress={}
                />
                <Button
                    title="Cancel"
                    onPress={this.goToHomeScreen}
                />
            </View>
        );
    }
}



export default Menu;
