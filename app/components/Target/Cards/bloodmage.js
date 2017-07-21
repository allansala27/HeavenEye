import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Bloodmage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bloodmage",
            id: "0007",
            played: false,
            value: 4,
            type: "range",
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
                    source= {require('./imgs/card_0007_bloodmage.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const bloodmageId = '0007';