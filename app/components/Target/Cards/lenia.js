import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Lenia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lenia",
            id: "0021",
            played: false,
            value: 10,
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
                    source= {require('./imgs/card_0021_lenia.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const leniaId = '0021';