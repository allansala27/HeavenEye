import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';

class Target extends Component {

	render(){
		return(
			<Text>
				{this.props.children}
			</Text>	
		);
	}
}

export default Target;