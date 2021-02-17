import React, { FunctionComponent } from 'react'
import isEqual from 'react-fast-compare';
import { StyleSheet, View } from "react-native";
import { SCREEN_WIDTH } from '../../constants'
import LinearGradient from 'react-native-linear-gradient';
import { STATUS_BAR_HEIGHT } from '../../constants'
const Background: FunctionComponent = () => {
    return (
        <>
            <LinearGradient
                colors={['#D8090D', '#D8090D']}
                useAngle={true}
                angle={145}
                angleCenter={{ x: 0.5, y: 0.5 }}
                style={styles.background}
            >
                <View style={styles.background}></View>
            </LinearGradient>
        </>
    );
}
export default React.memo(Background, isEqual)
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: 1000,
        height: 1000,
        top: -(1000 - STATUS_BAR_HEIGHT - (SCREEN_WIDTH / 1.8) + (SCREEN_WIDTH / 9) / 3),
        alignSelf: 'center',
        borderRadius: 1000,
        overflow: 'hidden',
        // backgroundColor: '#e63946',
        zIndex: -1,
    },
})