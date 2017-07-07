import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';

import Card from './Card';
    
class Hand extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true}>
                    <Card>
                    	Card 1
                    </Card>	
                    <Card>
                    	Card 2
                    </Card>
                    <Card>
                    	Card 3
                    </Card>
                    <Card>
                    	Card 4
                    </Card>
                    <Card>
                    	Card 5
                    </Card>
                    <Card>
                    	Card 6
                    </Card>
                </ScrollView>
            </View>
        );
    }
}



export default Hand;