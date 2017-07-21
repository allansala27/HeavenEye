import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Game from '../screens/Game';
import Home from '../screens/Home';
import SinglePlayer from '../screens/SinglePlayer'

export const Screens = StackNavigator ({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Heaven Eye',
			header: null
		}
	},

	Game: {
		screen: Game,
		navigationOptions: {
			title: 'Game',
			header: null
		}
	},

	Single: {
		screen: SinglePlayer,
		navigationOptions: {
			title: 'Your Hand',
		}
	}
})
