import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'


export default class Berserker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Berserker",
            id: "0019",
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
                    source= {require('./imgs/card_0019_berserker.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const berserkerId = '0019';