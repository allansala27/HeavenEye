import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Target from '../components/Target';
import PlayableCard from '../components/PlayableCard';
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
