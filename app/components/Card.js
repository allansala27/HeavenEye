import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';

class Card extends Component {
    state = {
        modalVisible: false,
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
                            <Text
                            	style={
                                        {
                                            fontSize: 20,
                                            padding: 5,
                                            backgroundColor: 'white'
                                        }
                                }>{this.props.children} Info</Text>
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text 
                                    style={
                                        {
                                            fontSize: 10,
                                            padding: 5,
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
                    <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'white'
                            }
                        }>
                        {this.props.children}
                    </Text>
                </TouchableHighlight>
			</View>
		);
	}
}

export default Card;