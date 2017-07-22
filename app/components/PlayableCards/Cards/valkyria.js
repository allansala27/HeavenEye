import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

import styles from './styles'

class Valkyria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Valkyria",
            id: "0017",
            played: false,
            value: 5,
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
                        source= {require("./thumbs/thumb_017.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Valkyria;
export const valkyriaId = '0017';