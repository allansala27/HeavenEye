import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Legionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Legionnaire",
            id: "0011",
            played: false,
            value: 5,
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
                <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Image
                        source= {require("./thumbs/thumb_011.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Legionnaire;
export const legionnaireId = '0011';