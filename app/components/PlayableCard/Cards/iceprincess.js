import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class IcePrincess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ice Princess",
            id: "0020",
            played: false,
            value: 7,
            type: "range",
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


export default IcePrincess;
export const iceprincessId = '0020';