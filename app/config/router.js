import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Menu from '../screens/Menu';

export const Screens = StackNavigator ({
	Menu: {
		screen: Menu,
	},
})


// export const Tabs = TabNavigator({
// 	Feed: {
// 		screen: FeedStack,
// 		navigationOptions: {
// 			tabBarLabel: 'Feed',
// 			tabBarIcon: ({ tintColor }) =>
// 				<Icon
// 					name="list"
// 					size={35}
// 					color={tintColor}
// 				/>
// 		}
// 	},
// 	Me: {
// 		screen: Me,
// 		navigationOptions: {
// 			tabBarLabel: 'Me',
// 			tabBarIcon: ({ tintColor }) =>
// 				<Icon
// 					name="account-circle"
// 					size={35}
// 					color={tintColor}
// 				/>
// 		}	
// 	}
// })
