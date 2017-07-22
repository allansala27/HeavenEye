import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
  	fontSize: 36,
  	fontWeight: "600",
  	color: '#f0ffff',
  }
})

export default class Score extends Component {
	newGame = () => {
        this.props.navigation.navigate('Game');
    };

	render() {
		return(
			<Image source={require('../assets/images/heaveneye_screengame_gameover.png')} style={styles.container}>
				<Text style={styles.text}>
					GAME OVER
				</Text>
				<Text>
					{this.props.savedScore}
				</Text>	
				<Button
                    title="Restart"
                    onPress={this.newGame}
                    style={styles.text.color}
                />
			</Image>	
		)
	}
}