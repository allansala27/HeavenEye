import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

import Hand from '../components/Hand';
import Melee from '../components/Melee';
// import Ranged from '../components/Ranged';
// import Artillery from '../components/Artillery';
    
class SinglePlayer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Hand />
                <Melee />
            </View>

        );
    }
}

var styles = StyleSheet.create({
    container: {
    	flex: 1,
        height: null,
        width: null,
        resizeMode: 'contain'
    },
    thumb: {
        height:100,
        width:60,
        resizeMode: 'contain'
    }
}) 


export default SinglePlayer;