import React from "react";
import {
    Animated,
    StyleSheet,
    Text
} from "react-native";
import { ICON_SIZE } from "../../constants";
import { RectButton } from 'react-native-gesture-handler';
import { SCREEN_WIDTH } from "../../constants"
export default ({
    children,
    onPress_,
    isFocused,
    translateValue,
}: any) => {

    const width = translateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, ICON_SIZE],
        extrapolate: 'clamp'
    });

    return (
        <RectButton
            style={{
                paddingTop: 5,
                width: SCREEN_WIDTH / 5,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={() => {
                onPress_()
            }}
        >
            <Animated.View
                style={{
                    width: ICON_SIZE,
                    height: ICON_SIZE,

                }}
            >
                <Animated.View style={[StyleSheet.absoluteFill]}>{children.icon}</Animated.View>
                <Animated.View style={[{
                    width: width, overflow: "hidden",

                }]}>
                    {React.cloneElement(children.icon, isFocused && { active: true })}
                </Animated.View>
            </Animated.View>
            <Animated.Text style={[{ fontSize: 11, color: '#000', fontFamily: 'Nunito-Bold', }]}>
                {children.name}
            </Animated.Text>
        </RectButton>
    );
};

const style = StyleSheet.create({
    tabContainer: {
        height: 60,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 10,
        position: "absolute",
        bottom: 0,
    },
    slider: {
        height: 5,
        position: "absolute",
        top: 0,
        left: 10,
        backgroundColor: 'red',
        borderRadius: 10,
    },
});