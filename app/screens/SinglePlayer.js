import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

import PlayableCard from '../components/playableCard';

    
class SinglePlayer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			meleeScore: 0,
			rangedScore: 0,
			artilleryScore: 0
		}
	}

    render() {
        return (
            <View style={styles.container}>
            </View>

        );
    }
}

var styles = StyleSheet.create({
    container: {
    	flex: 1,
        height: null,
        width: null,
    }
}) 


export default SinglePlayer;