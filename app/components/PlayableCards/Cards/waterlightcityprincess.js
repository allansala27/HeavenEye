import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class WaterlightCityPrincess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Waterlight City Princess",
            id: "0015",
            played: false,
            value: 7,
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
                        source= {require("./thumbs/thumb_015.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default WaterlightCityPrincess;
export const waterlightcityprincessId = '0015';