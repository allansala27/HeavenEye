import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Berserker extends Component {
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

    chooseValue() {
       this.props.chosenValue(this.state.value)
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress={this.chooseValue.bind(this)}>
                    <Image
                        source= {require("./thumbs/thumb_019.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Berserker;
export const berserkerId = '0019';