import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Archdaemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Archdaemon",
            id: "0008",
            played: false,
            value: 4,
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
                    source= {require('./imgs/card_0008_archdaemon.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const archdeaemonId = '0008';