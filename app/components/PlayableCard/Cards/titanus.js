import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Titanus extends Component {
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
                    <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'white'
                            }
                        }>
                        {this.state.name}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


export default Titanus;
export const titanusId = '0013';