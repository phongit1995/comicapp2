import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, StatusBar } from 'react-native';
const { width } = Dimensions.get("window");
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Item from './Item';
import { getListCategory } from './../../api/category';
import { STATUS_BAR_HEIGHT } from '../../constants'
import { useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
import Header from './Header';

export type RootStackParamList = {
    CATEGORY_SCREEN: { type: 'type' };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>

export type RouterProps = {
    route: {
        type: number,
    }
}
const ShowAll = () => {
    const router = useRoute<RootRouteProps<'CATEGORY_SCREEN'>>();
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} translucent={true} backgroundColor="transparent" />
            <Header {...{ _type: router.params?.type }}></Header>
            <Item type={router.params?.type} />
        </View>
    )
}

export default ShowAll;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFF",
    },
    header: {
        fontFamily: "Brygada1918-Medium",
        borderBottomWidth: 0.5,
        paddingVertical: 13,
        //borderBottomColor:"#A6ACA3",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 10,
        elevation: 1
    },
    labelStyle: {
        fontSize: 12,
        color: "#fff",
        fontFamily: "Brygada1918-Medium",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: "white",

    },
    labelStyleActive: {
        fontSize: 12,
        color: "#fff",
        fontFamily: "Brygada1918-Medium",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#4da7db",
    }
})
