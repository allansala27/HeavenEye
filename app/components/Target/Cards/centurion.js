import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Centurion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Centurion",
            id: "0018",
            played: false,
            value: 3,
            type: "melee",
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
                    source= {require('./imgs/card_0018_centurion.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const centurionId = '0018';