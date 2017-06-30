import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Menu from '../screens/Menu';
import Home from '../screens/Home';

export const Screens = StackNavigator ({
	Home: {
		screen: Home,
	},

	Menu: {
		screen: Menu,
	},
})
