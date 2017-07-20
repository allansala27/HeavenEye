import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Target from '../components/target';
import PlayableCard from '../components/playableCard';
import Timer from '../components/Timer';

    
class Game extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
            <Timer /> 
                <Target>
                    <Text>
                        This is your target
                    </Text>
                </Target>
                <PlayableCard />
            </View>
        );
    }
}



export default Game;
