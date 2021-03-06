import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Titanus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Titanus",
            id: "0013",
            played: false,
            value: 7,
            type: "artillery",
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
                    source= {require('./imgs/card_0013_titanus.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const titanusId = '0013';