import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Katalies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Katalies",
            id: "0014",
            played: false,
            value: 7,
            type: "melee",
            modalVisible: false
        }    
    }

    componentWillMount(){
        console.log('this is deck!!! PAY ATTENTION TO ME');
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render(){
        return(
            <View>
                <Image
                    source= {require('./imgs/card_0014_katalies.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const kataliesId = '0014';