import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import * as screen from '../constants/ScreenTypes'

import NavigationBar from '../components/NavigationBar/index'
import MainHome from '../screens/MainHome';
import ListCategory from '../screens/ListCategory';
import Search from '../screens/Search';

export type TypeProps = {
  showLabel: boolean
};

const tabBarOptions = {
  showLabel: false,
}

export default () => {

  return (
    <Tab.Navigator
      tabBar={props => <NavigationBar {...props} />}
      tabBarOptions={tabBarOptions}
      
    >
      <Tab.Screen
        name={screen.MAIN_HOME_SCREEN}
        component={MainHome} />
      {/* <Tab.Screen
        name={screen.SEARCH_SCREEN}
        component={Search} /> */}
      <Tab.Screen
        name={screen.FOLLOW_SCREEN}
        component={MainHome} />
      <Tab.Screen
        name={screen.HISTORY_SCREEN}
        component={MainHome} />
      <Tab.Screen
        name={screen.SETTING_SCREEN}
        component={MainHome} />
    </Tab.Navigator>
  );
}
