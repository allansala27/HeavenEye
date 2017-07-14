import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';

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
            <View>
            	<Melee>
            		{this.state.meleeScore}
            	</Melee>
            	<Ranged>
            		{this.state.rangedScore}
            	</Ranged>
            	<Artillery>
            		{this.state.artilleryScore}
            	</Artillery>
                <Hand />
            </View>
        );
    }
}



export default SinglePlayer;