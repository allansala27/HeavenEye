import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Menu from '../screens/Menu';
import Home from '../screens/Home';
import SinglePlayer from '../screens/SinglePlayer'

export const Screens = StackNavigator ({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Heaven Eye',
		}
	},

	Menu: {
		screen: Menu,
		navigationOptions: {
			title: 'Menu',
		}
	},

	Single: {
		screen: SinglePlayer,
	}
})
