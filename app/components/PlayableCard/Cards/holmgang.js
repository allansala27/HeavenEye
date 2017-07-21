import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Holmgang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Holmgang",
            id: "0006",
            played: false,
            type: "battleCon",
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
                        source= {require('./thumbs/thumb_006.png')}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Holmgang;
export const holmgangId = '0006';