import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
    
class Menu extends Component {
    
    goToHomeScreen = () => {
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View>
                <Text>
                    Menu
                </Text>    
                <Button
                    title="Single Player"
                    // onPress={}
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
