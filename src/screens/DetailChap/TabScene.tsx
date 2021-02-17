
import React, { FunctionComponent } from 'react';
import isEqual from 'react-fast-compare';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Image
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { DetailChapProps } from './DetailChap'
import { useNavigation } from '@react-navigation/native';
import * as SCREEN from '../../constants/ScreenTypes'
import { iconload } from '../../constants'
import Loading from '../../components/Loading';
type itemProps = {
    commentCount: number
    createdAt: string
    index: number
    name: string
    __v: number
    _id: string
}

type TabSceneProps = {
    _id: string,
    data: DetailChapProps | null,
    loading: boolean,
}

const TabScene: FunctionComponent<TabSceneProps> = ({ _id, data, loading }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container]}>
            {
                loading ? (
                    <Loading></Loading>
                ) :
                    data?.data.length === 0 ? <Text style={{
                        textAlign: 'center',
                        paddingVertical: 10,
                        fontFamily: 'Brygada1918-Regular',
                    }}>updating...</Text> : data?.data.map((item: itemProps, _: number) => {
                        return (
                            <RectButton key={item._id}
                                onPress={() => navigation.navigate(SCREEN.DETIAL_CHAPTER, { id: item._id, idChap: _id })}
                            >
                                <View style={styles.Chapter_}>
                                    <Text style={styles.name} >Chapter {item.index}</Text>
                                    <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 13 ,color:'#5c6b73'}}>{item.createdAt.split(/T.*/)[0]}</Text>
                                </View>
                            </RectButton>
                        )
                    })

            }
        </View>
    );
};
export default React.memo(TabScene, isEqual)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    name: {
        fontSize: 14,
        color: '#5c6b73',
        fontFamily: 'Nunito-Bold',
    },
    Chapter_: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#d6d6d6',
        padding: 20,
    },
    containerTitl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#d6d6d6',
    },
})
