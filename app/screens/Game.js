import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, StatusBar } from 'react-native';

import Target from '../components/Target';
import PlayableCards from '../components/PlayableCards';
import Timer from '../components/Timer';
import Score from './Score';

// Firebase 
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC9WpJ8YES3GzQLxkX-gbFS2v4Ot8-T2ug",
    authDomain: "heaveneye-ace6a.firebaseapp.com",
    databaseURL: "https://heaveneye-ace6a.firebaseio.com",
    projectId: "heaveneye-ace6a",
    storageBucket: "heaveneye-ace6a.appspot.com",
    messagingSenderId: "377871605720"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref();

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
            isGameRunning: false,
            score: 0,
            targetVal: 0,
            chosenVal: 0,
        } 
        this.scoreRef = database.child('score');
    }

    componentDidMount() {
        this.setState({
            isGameRunning: true 
        })
    }

    getTargetValue(newTargetVal) {
        this.setState({
            targetVal: newTargetVal
        })
    }

    getChosenValue(newChosenVal) {
        this.setState({
            chosenVal: newChosenVal
        })
        console.log("LOOK AT THIS: chosen Val = " + newChosenVal);
    }

    render() {
        return (
            <Image source={require('../assets/images/heaveneye_screengame_field.jpg')} style={styles.container}>
            <StatusBar hidden />
            <Timer /> 
            <Target getTarget={this.getTargetValue.bind(this)}/>
            <PlayableCards chooseValue={this.getChosenValue.bind(this)}>
            </PlayableCards>
            </Image>
        );
    }
}

