import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Dreadnaught extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dreadnaught",
            id: "0012",
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
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Image
                                source= {require('./imgs/card_0012_dreadnaught.png')}
                                style= {styles.image}
                            />
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text 
                                    style={
                                        {
                                            fontSize: 20,
                                            padding: 10,
                                            backgroundColor: 'red'
                                        }
                                }>
                                    Hide Info
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Image
                        source= {require("./thumbs/thumb_012.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Dreadnaught;
export const dreadnaughtId = '0012';