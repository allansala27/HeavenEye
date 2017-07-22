import React, { Component } from 'react';
import {  
    Button, 
    Image, 
    StyleSheet 
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    height:100,
    width:300,
    resizeMode: 'contain'
  }
})
    
class Home extends Component {
    playGame = () => {
        this.props.navigation.navigate('Game');
    };

    render() {
        return (
            <Image source={require('../assets/images/heaveneye_screengame_menu.png')}
            style={styles.container}>
                <Image source={require('../assets/images/heaveneye_logo_white.png')}
                style={styles.logo} />
                <Button
                    title="Start Game"
                    onPress={this.playGame}
                    color="#fff"
                />
            </Image>
    );
  }
}



export default Home;
