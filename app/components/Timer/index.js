import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { Animated, Easing } from 'react-native';
import styles from './styles';
import metrics from './config/metrics'

type State = {
  animateValue: any,
};

const timeLimit = 30000;

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
           animateValue: new Animated.Value(timeLimit),
        }
    }

    componentDidMount() {
        Animated.timing(this.state.animateValue, {
            duration: timeLimit,
            easing: Easing.linear, // No easing
            toValue: 0,
        }).start();
    }


    render() {
        // Animate the Timer color from grey to red, starting when there are left only 12 seconds
        const backgroundColor = this.state.animateValue.interpolate({
            inputRange: [0, timeLimit * 0.4, timeLimit],
            outputRange: ['rgba(255,0,0, 1)', 'rgba(0,0,0, 0.3)', 'rgba(0,0,0, 0.3)'],
        });
        // Animate the Timer width from DEVICE_WIDTH to 0 in TIME_LIMIT_MS (which currently is 30 seconds)
        const width = this.state.animateValue.interpolate({
            inputRange: [0, timeLimit],
            outputRange: [0, metrics.DEVICE_WIDTH],
        });

    return (
        <View style={styles.container}>
            <View style={[styles.content, { width, backgroundColor }]} />
        </View>
    );
  }
}
