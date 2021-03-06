import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class IcePrincess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ice Princess",
            id: "0020",
            played: false,
            value: 7,
            type: "range",
            modalVisible: false
        }    
    }

    componentDidMount() {
        this.props.getTarget(this.state.value)
    }


    render(){
        return(
            <View>
                <Image
                    source= {require('./imgs/card_0020_ice-princess.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const iceprincessId = '0020';