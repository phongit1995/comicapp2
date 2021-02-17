import React, { ReactElement } from 'react';
import { View, Dimensions, Animated,Easing } from 'react-native'
import TabBar from './TabBar';
import {tabs} from '../../themes/icons'

export default ({ state, navigation }) => {
    const [translateValue] = React.useState(new Animated.Value(0));
    const totalWidth = Dimensions.get("window").width;
    const animateSlider = (index: number) => {
        Animated.sequence([
            Animated.timing(translateValue, {
                toValue: 0,
                duration: 0,
                easing: Easing.linear,
                useNativeDriver: false,
                
            }),
            Animated.timing(translateValue, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ]).start()
    };

    React.useEffect(() => {
        animateSlider(state.index);
    }, []);

    return (
        <View style={[{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderColor: '#f2f2f2',
            elevation: 1
        }, { width: totalWidth }]}>

            {state.routes.map((route: { params: { icon: ReactElement; }; key: string | number | null | undefined; name: string; }, index: number) => {
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    })
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                    animateSlider(index);
                };
                return (
                    <TabBar
                        key={route.key}
                        {...{ isFocused, index, translateValue }}
                        onPress_={onPress}
                    >
                        {tabs[index]}
                    </TabBar>
                );
            })}
        </View>
    );
}
