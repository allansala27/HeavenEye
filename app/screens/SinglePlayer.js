import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

import Hand from '../components/Hand';
import Melee from '../components/Melee';
import Ranged from '../components/Ranged';
import Artillery from '../components/Artillery';
    
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
                <Hand />
            	<Melee>
            		{this.state.meleeScore}
            	</Melee>
            	<Ranged>
            		{this.state.rangedScore}
            	</Ranged>
            	<Artillery>
            		{this.state.artilleryScore}
            	</Artillery>
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