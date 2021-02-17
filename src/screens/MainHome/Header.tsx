import React, { FunctionComponent } from 'react'
import { Image, StyleSheet, View, TouchableOpacity, TextInput, Platform } from "react-native";

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import * as screen from '../../constants/ScreenTypes'
import { STATUS_BAR_HEIGHT } from '../../constants'
export const iconsearch = require('../../assets/image/a6t.png');
import { useNavigation } from '@react-navigation/native';
import isEqual from 'react-fast-compare';
const Header: FunctionComponent = () => {
    const navigation = useNavigation<any>();
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate(screen.SEARCH_SCREEN)}
                >
                    <Image
                        style={styles.tinyLogo}
                        source={iconsearch}></Image>

                </TouchableOpacity>
            </View>
        </>
    );
}
export default React.memo(Header, isEqual)
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        paddingHorizontal: 20,
        width: '100%',
        marginTop: STATUS_BAR_HEIGHT,
        position: 'absolute',
        top: '0%',
        zIndex: 999
    },
    tinyLogo: {
        width: 45,
        height: 45,
        resizeMode: 'contain'
    },

})