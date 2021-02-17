import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, ActivityIndicator, Animated, FlatList, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get("window");
import { getDetailChapter } from './../../api/comic'
import { makeUserName } from './../../common/stringHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import * as SCREEN from './../../constants/ScreenTypes';
import { useNavigation } from '@react-navigation/native';
export const iconlist = require('../../assets/image/a7n.png');
export default function Footer({ idChap, translateYFooter, beforeChapter, afterChapter, _setModalVisible }) {
    const sheetRef = React.useRef<any>();

    const navigation = useNavigation<any>();
    return (

        <Animated.View style={[styles.Footer, {
            transform: [
                { translateY: translateYFooter }
            ]
        }]}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View >
                    {beforeChapter != null ?
                        <TouchableOpacity onPress={() => { navigation.replace(SCREEN.DETIAL_CHAPTER, { id: beforeChapter }) }} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <FontAwesome5 name={"angle-left"} size={35} color={"#ffffff"} />
                        </TouchableOpacity> : null
                    }
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => navigation.navigate(SCREEN.CHAPTER_LIST_SCREEN, { id: idChap })}
                        style={styles.listchap}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles.tinyiconLeft}
                            source={iconlist}></Image>
                        <Text style={{ color: '#fff', fontFamily: 'Nunito-Bold', }}> Chapter</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => _setModalVisible(true)}
                    >
                        <Ionicons name="settings-outline" size={25} color={"#ffffff"} />
                    </TouchableOpacity>
                </View>
                <View >
                    {afterChapter != null ?
                        <TouchableOpacity onPress={() => { navigation.replace(SCREEN.DETIAL_CHAPTER, { id: afterChapter }) }} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <FontAwesome5 name={"angle-right"} size={35} color={"#ffffff"} />
                        </TouchableOpacity> : null
                    }
                </View>
            </View>
        </Animated.View>

    );

}

const styles = StyleSheet.create({
    endchap: {
        textAlign: 'center'
    },
    Footer: {
        width: '100%',
        position: "absolute",
        bottom: 0,
        left: 0,
        height: height / 13,
        paddingHorizontal: 20,
        elevation: 6,
        backgroundColor: '#404042',
        justifyContent: "center",
        opacity: 0.8,
        zIndex: 10,

    },
    textChapter: {
        fontSize: 14,
        color: "#b8b4b4"
    },
    listchap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyiconLeft: {
        width: 30,
        height: 30,
    },
})
