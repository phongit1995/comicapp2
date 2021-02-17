import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from "react-native";

import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import { STATUS_BAR_HEIGHT } from '../../constants'
export default () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Search</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#55b9f3',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingTop: STATUS_BAR_HEIGHT
    },
    txt: {
        fontSize: 25,
        fontFamily: 'Pacifico-Regular',
        fontWeight: 'normal',
        color: '#fff'
    }
})