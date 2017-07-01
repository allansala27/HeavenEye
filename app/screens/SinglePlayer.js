import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';
    
class SinglePlayer extends Component {
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View
                style={
                    {
                        position: 'absolute',
                        bottom:0,
                    }
                }>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Card Info</Text>
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text 
                                    style={
                                        {
                                            fontSize: 30,
                                            padding: 20,
                                            backgroundColor: 'red'
                                        }
                                }>
                                    Hide Modal
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <ScrollView horizontal={true}>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'blue'
                            }
                        }>
                            Card 1
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'red'
                            }
                        }>
                            Card 2
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'yellow'
                            }
                        }>
                            Card 3
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'purple'
                            }
                        }>
                            Card 4
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'orange'
                            }
                        }>
                            Card 5
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'green'
                            }
                        }>
                            Card 6
                        </Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}



export default SinglePlayer;
