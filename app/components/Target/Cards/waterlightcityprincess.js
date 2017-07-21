import React, { Component } from 'react';
import { View, Image} from 'react-native';
import styles from './styles'

export default class WaterlightCityPrincess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Waterlight City Princess",
            id: "0015",
            played: false,
            value: 7,
            type: "range",
        }    
    }

    componentWillMount(){
        console.log('this is deck!!! PAY ATTENTION TO ME');
    }


    render(){
        return(
            <View>
                <Image
                    source= {require('./imgs/card_0015_waterlight-city-princess.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const waterlightcityprincessId = '0015';