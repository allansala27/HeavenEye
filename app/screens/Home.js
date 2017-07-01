import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
    
class Menu extends Component {
    
    goToMenu = () => {
        this.props.navigation.navigate('Menu');
    };

    render() {
        return (
            <View>  
                <Button
                    title="Play"
                    onPress={this.goToMenu}
                />
            </View>
        );
    }
}



export default Menu;
