import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Ghostblade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ghostblade",
            id: "0016",
            played: false,
            value: 10,
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
                    source= {require('./imgs/card_0016_ghostblade.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const ghostbladeId = '0016';