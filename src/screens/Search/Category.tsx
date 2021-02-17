import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import * as screen from '../../constants/ScreenTypes'
const items = [
    {
        name: 'Action',
    },
    {
        name: 'Fantasy',
    },
    {
        name: 'Adventure',
    },
    {
        name: 'Drama',
    },
    {
        name: 'Adult',
    },
    {
        name: 'Comedy',
    },
]

export default React.memo(() => {

    const renderItem = React.useCallback(({ item }) => <Item item={item}></Item>, [])
    const keyExtractor = React.useCallback((_, index): string => index.toString(), [])
    const navigation = useNavigation();


    const Item = ({ item: { icon, name } }: any): JSX.Element => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(screen.CATEGORY_SCREEN, { key: name })}
                style={{
                    backgroundColor: '#f1f4eb',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginRight: 5,
                    marginBottom: 10,
                    borderRadius: 5
                }}
                activeOpacity={0.5}>
                <Text style={{
                    paddingTop: 5,
                    textAlign: 'center',
                    fontSize: 13,
                    fontFamily: 'Nunito-Bold',
                }}>{name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Categories</Text>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginVertical: 10 }}>
                    {
                        items.map((item, index) => {
                            return <Item item={item} key={index}></Item>
                        })
                    }
                </View>
            </View>
        </>
    );
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 20,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        fontWeight: 'normal',

    },
})
