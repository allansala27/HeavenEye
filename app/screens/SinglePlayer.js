import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';

import Hand from '../components/Hand';
import Melee from '../components/Melee';
import Ranged from '../components/Ranged';
import Artillery from '../components/Artillery';
    
class SinglePlayer extends Component {
    render() {
        return (
            <View>
                <Hand />
                <Hand />
            </View>
        );
    }
}



export default SinglePlayer;