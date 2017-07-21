import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Dreadnaught extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dreadnaught",
            id: "0012",
            played: false,
            value: 7,
            type: "artillery",
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
                    source= {require('./imgs/card_0012_dreadnaught.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const dreadnaughtId = '0012';