import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Target from '../components/Target';
import PlayableCard from '../components/PlayableCard';
import Timer from '../components/Timer';
import Score from './Score';
    
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }

    render() {
        return (
            <View>
            <Timer /> 
            <Target/>
            <PlayableCard />
            <Score savedScore = {this.state.score}>
            </Score>
            </View>
        );
    }
}

