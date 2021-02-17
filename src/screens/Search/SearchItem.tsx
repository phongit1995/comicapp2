import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { formatViews } from '../../common/stringHelper';
import Feather from 'react-native-vector-icons/Feather';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import * as SCREEN from './../../constants/ScreenTypes';
import { RectButton } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");
export const iconView = require('../../assets/image/a96.png');
const SearchItem = ({ data }) => {
  
    const navigation = useNavigation();
    const goToDetialComic = (id: String) => {
        navigation.navigate(SCREEN.DETIAL_COMIC_SCREEN, { id: id, item: data })
    }

    const showCategory = React.useCallback(() => {
        return data.category.slice(0, 5).map((item, index) => {
            return (
                <Text key={index} style={styles.normal}>{item}</Text>
            )
        })
    }, [])

    return (
        <RectButton style={styles.contaiItem} onPress={() => goToDetialComic(data._id)} >
        <View style={{ width: '30%', justifyContent: 'flex-start' }}>
            <Image
                resizeMode='stretch'
                source={{
                    uri: data.image, headers: {
                        Referer: "https://manganelo.com/"
                    }
                }} style={styles.imageRecommend}></Image>
        </View>
        <View style={{ width:  '70%', paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text numberOfLines={2} style={styles.nameComic}>{data.name}</Text>
            <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                <Image
                    resizeMode="contain"
                    style={styles.tinyLogo}
                    source={iconView}></Image>
                <Text style={styles.nameChap}> {formatViews(data.views)}</Text>
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {showCategory()}
            </View>
        </View>
    </RectButton>
    )
}
export default React.memo(SearchItem);
const styles = StyleSheet.create({
    contaiItem: {
        height: (width * 0.35),
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,

    },
    imageRecommend: {
        width: "100%",
        height: "100%",
    },
    nameComic: {
        paddingVertical: 0,
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
    },
    nameChap: {
        fontSize: 10,
        fontFamily: 'Nunito-Bold',
        color: '#5c6b73'
    },
    tinyiconLeft: {
        width: 45,
        height: 45,
    },
    category: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
    },
    normal: {
        fontWeight: 'normal',
        color: '#5c6b73',
        backgroundColor: '#f1f4eb',
        paddingVertical: 5,
        fontSize: 11,
        paddingHorizontal: 5,
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    tinyLogo: {
        width: 16,
        height: 20,
    },
})