import React, { Component } from 'react';
import styles from './styles';
import Game from '../../../screens/Game'
import { 
    View, 
    Image, 
    TouchableHighlight
} from 'react-native';


class Archdaemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Archdaemon",
            id: "0008",
            played: false,
            value: 4,
            type: "melee",
            modalVisible: false
        }    
    }

    chooseValue() {
       this.props.chosenValue(this.state.value)
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress={this.chooseValue.bind(this)}>
                    <Image
                        source= {require("./thumbs/thumb_008.png")}
                        style= {styles.thumb}
                    />

                </TouchableHighlight>
            </View>
        );
    }
}


export default Archdaemon;
export const archdeaemonId = '0008';