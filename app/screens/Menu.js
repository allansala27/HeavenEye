import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
    
class Menu extends Component {
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
                    onPress={this.playSingle}
                />
            </View>
        );
    }
}



export default Menu;
