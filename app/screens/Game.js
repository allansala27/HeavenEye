import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, StatusBar } from 'react-native';

import Target from '../components/Target';
import PlayableCard from '../components/PlayableCard';
import Timer from '../components/Timer';
import Score from './Score';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
    
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }

    render() {
        return (
            <Image source={require('../assets/images/heaveneye_screengame_field.jpg')} style={styles.container}>
            <StatusBar hidden />
            <Timer /> 
                <Target>
                    <Text>
                        This is your target
                    </Text>
                </Target>
                <PlayableCard />
            <Target/>
            <PlayableCard />
            <Score savedScore = {this.state.score}>
            </Score>
            </Image>
        );
    }
}

