import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal, StyleSheet, Image, StatusBar  } from 'react-native';

class StartButton extends Component {

	goToMenu = () => {
        this.props.navigation.navigate('Menu');
    }

	render() {
		return (
			<TouchableHighlight>
				<View>
					<Text onPress={this.goToMenu}>Start Game</Text>
				</View>
			</TouchableHighlight>
			); 
	}
}

export default StartButton;