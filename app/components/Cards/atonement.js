import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

import SinglePlayer from '../../screens/SinglePlayer';
// import Deck from './Deck.json';

var styles = StyleSheet.create({
    image: {
        height: 500,
        width: 375,
        resizeMode: 'contain'
    },
    thumb: {
        height:100,
        width:60,
        resizeMode: 'contain'
    play: {
        width: 200
    },
    hide: {
        width: 200
    }
}) 

class Atonement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Atonement",
            id: "0001",
            value: 2,
            played: false,
            type: "battleCon",
            modalVisible: false,
        };
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
                                source= {require('./imgs/card_0001_atonement.png')}
                                style= {styles.image}
                            />
                            <Button
                                onPress={SinglePlayer.meleeScore += this.state.value}
                                title="Play Card"
                                color="#841584"
                                style={styles.play}
                            />
                            <Button
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}
                                title="Hide Info"
                                color="#841584"
                                style={styles.hide}
                            />
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
                        </View>
                    </View>
                </Modal>
				<TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Image
                        source= {require('./thumbs/thumb_001.png')}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
			</View>
		);
	}
}


export default Atonement;
export const atonementId = '0001';