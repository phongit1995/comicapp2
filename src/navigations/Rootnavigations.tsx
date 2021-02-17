import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { navigationRef } from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import * as screen from '../constants/ScreenTypes'
import MainHome from '../screens/MainHome';
import Search from '../screens/Search';
import AuthStack from './AuthStack';
import DetailChap from '../screens/DetailChap';
import ReadComic from '../screens/ReadComic';
import ListChappter from '../screens/ReadComic/ListChappter';
import ShowAll from '../screens/ShowAll';
import Category from '../screens/MainHome/Category';
import ListCategory from '../screens/ListCategory';


const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false
}
const AllOptionSlideFromRight: StackNavigationOptions = {
    ...TransitionPresets.FadeFromBottomAndroid,
    // cardStyle: { backgroundColor: 'transparent' }
}
const SlideFromRightIOS: StackNavigationOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    // cardStyle: { backgroundColor: 'transparent' }
}

export default () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator screenOptions={navigationOptions} initialRouteName={screen.MAIN_HOME_SCREEN} >
                <Stack.Screen name={screen.MAIN_HOME_SCREEN} component={AuthStack} />
                <Stack.Screen options={StyleSheet.flatten(SlideFromRightIOS)} name={screen.SEARCH_SCREEN} component={Search} />
                <Stack.Screen options={StyleSheet.flatten(SlideFromRightIOS)} name={screen.SHOWALL_LIST_SCREEN} component={ShowAll} />
                <Stack.Screen options={StyleSheet.flatten(SlideFromRightIOS)} name={screen.DETIAL_COMIC_SCREEN} component={DetailChap} />
                <Stack.Screen options={StyleSheet.flatten(AllOptionSlideFromRight)} name={screen.DETIAL_CHAPTER} component={ReadComic} />
                <Stack.Screen options={StyleSheet.flatten(SlideFromRightIOS)} name={screen.CHAPTER_LIST_SCREEN} component={ListChappter} />
                <Stack.Screen options={StyleSheet.flatten(SlideFromRightIOS)} name={screen.CATEGORY_SCREEN} component={ListCategory} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

