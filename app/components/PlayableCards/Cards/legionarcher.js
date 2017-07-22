import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class LegionArcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Legion Archer",
            id: "0009",
            played: false,
            value: 3,
            type: "range",
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
                        source= {require("./thumbs/thumb_009.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default LegionArcher;
export const legionarcherId = '0009';