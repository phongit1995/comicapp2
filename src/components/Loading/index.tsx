import React, { FunctionComponent } from 'react';
import isEqual from 'react-fast-compare';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { iconload } from '../../constants'


const Loading: FunctionComponent = () => {
    return (
        <View style={styles.loading}>
            <Image
                resizeMode="contain"
                style={styles.tinyiconLeft}
                source={iconload}></Image>
        </View>
    );
};
export default React.memo(Loading, isEqual)

const styles = StyleSheet.create({
    loading: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyiconLeft: {
        width: 25,
        height: 25,
    },
})
