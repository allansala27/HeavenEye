import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Game from '../screens/Game';
import Home from '../screens/Home';
import Score from '../screens/Score';

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
	Score: {
		screen: Score,
		navigationOptions: {
			title: 'Score',
			header: null
		}
	}

})
