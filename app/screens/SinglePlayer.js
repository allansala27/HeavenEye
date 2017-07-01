import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
    
class SinglePlayer extends Component {

    render() {
        return (
            <View> 
                <ScrollView horizontal={true}>
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
                    <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'green'
                            }
                        }>
                        Card 3
                    </Text>
                    <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'yellow'
                            }
                        }>
                        Card 4
                    </Text>
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
                    <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'purple'
                            }
                        }>
                        Card 6
                    </Text>
                </ScrollView>
            </View>
        );
    }
}



export default SinglePlayer;
