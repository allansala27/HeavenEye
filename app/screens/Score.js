import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import database from '../config/database'

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
  },
  scoreTitle: {
  	fontSize: 20,
  	fontWeight: "300",
  	color: '#f0ffff'
  },
  score: {
  	fontSize: 60,
  	fontWeight: "500",
  	color: 'red'
  }
})

export default class Score extends Component {
	constructor(props){
		super(props);
		this.state = {
			finalScore: 0
		}
	}

	setNewScore(scoreData) {
		this.setState({
			finalScore: scoreData
		})
		console.log(this.setNewScore.finalScore)
	}

	componentDidMount() {
		database.ref("heaveneye-ace6a/-KpfX5lVHPEXvI4TAwVl").on('value' , (score) => {
			let newScore = score.val().score["score"]
			// this.setNewScore(newScore)
			this.setState({finalScore: newScore})
			console.log("FINAL SCORE: "+newScore)
		})
	}

	newGame = () => {
        this.props.navigation.navigate('Game');
    };

	render() {
		return(
			<Image source={require('../assets/images/heaveneye_screengame_gameover.png')} style={styles.container}>
				<Text style={styles.text}>
					GAME OVER
				</Text>
				<Text style={styles.scoreTitle}>
					SCORE
				</Text>
				<Text style={styles.score}>
					{this.state.finalScore}
				</Text>
				<Button
                    title="Restart"
                    onPress={this.newGame}
                    color="#fff"
                />
			</Image>	
		)
	}
}