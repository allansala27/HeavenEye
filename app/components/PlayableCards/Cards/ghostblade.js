import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Ghostblade extends Component {
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

    chooseValue() {
       this.props.chosenValue(this.state.value)
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress={this.chooseValue.bind(this)}>
                    <Image
                        source= {require("./thumbs/thumb_016.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Ghostblade;
export const ghostbladeId = '0016';