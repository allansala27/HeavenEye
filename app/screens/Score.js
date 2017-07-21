import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Game from './Game';

export default class Score extends Component {
	newGame = () => {
        this.props.navigation.navigate('Game');
    };

	render() {
		return(
			<View>
				<Text>
					{this.props.savedScore}
				</Text>	
				<Button
                    title="Restart"
                    onPress={this.newGame}
                />
			</View>	
		)
	}
}