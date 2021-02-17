import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

// import { items } from './Data'
// import { ItemType } from '../model'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import * as screen from '../../constants/ScreenTypes'
const items = [
    {
        name: 'Action',
        icon: require('../../assets/image/action.jpg')
    },
    {
        name: 'Fantasy',
        icon: require('../../assets/image/Fantasy.jpg')
    },
    {
        name: 'Adventure',
        icon: require('../../assets/image/Adventure.jpg')
    },
    {
        name: 'Drama',
        icon: require('../../assets/image/Drama.jpg')
    },
    {
        name: 'Adult',
        icon: require('../../assets/image/Adult.jpg')
    },
    {
        name: 'Comedy',
        icon: require('../../assets/image/Comedy.jpg')
    },
    
    {
        name: 'Romance',
        icon: require('../../assets/image/Romance.jpg')
    },
    {
        name: 'Manhua',
        icon: require('../../assets/image/Manhua.jpg')
    },
    {
        name: 'Webtoons',
        icon: require('../../assets/image/Webtoons.jpg')
    },
]
export default React.memo(() => {

    const renderItem = React.useCallback(({ item ,index}) => <Item item={item} index={index}></Item>, [])
    const keyExtractor = React.useCallback((_, index): string => index.toString(), [])
    const navigation = useNavigation();


    const Item = ({ item: { icon, name },index }): JSX.Element => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(screen.CATEGORY_SCREEN, { key: name })}
                style={{ marginRight: 20 }}
                activeOpacity={0.7}>
                <View
                    style={styles.contaiWrapper}>
                    <Image source={icon} style={styles.imgIcon}></Image>
                </View>
                <Text style={{
                    paddingTop: 2,
                    textAlign: 'center',
                    fontSize: 12,
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
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    maxToRenderPerBatch={5}
                    windowSize={5}
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                >
                </FlatList>
            </View>
        </>
    );
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 20,
        marginVertical: 5,
    },
    contaiWrapper: {
        width: 70,
        height: 70,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowOffset: { width: 12, height: 12 },
        shadowColor: '#489dcf',
        shadowOpacity: 1.0,
        shadowRadius: 18,
        elevation: 1,
        marginVertical: 5,
        marginLeft: 2,
        borderRadius: 200
    },
    imgIcon: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 200
    },

    title: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        fontWeight: 'normal',
        marginBottom: 5
    },
})
