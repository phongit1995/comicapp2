
import React, { FunctionComponent } from 'react';
import isEqual from 'react-fast-compare';
import {
    StyleSheet,
    View,
    StatusBar,
    ActivityIndicator,
    FlatList
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { DetailChapProps } from '../../DetailChap/DetailChap'
import { useNavigation } from '@react-navigation/native';
import * as SCREEN from '../../../constants/ScreenTypes'
import { SCREEN_WIDTH } from '../../../constants'
import Header from './Header';
import { getDetialComic, getListChapter } from '../../../api/comic';
import Item from './Item'
import { useRoute, RouteProp } from '@react-navigation/native';
import Loading from '../../../components/Loading';

export type RootStackParamList = {
    CHAPTER_LIST_SCREEN: { id: 'id' };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>

export type RouterProps = {
    route: {
        key: string,
        title: string
    }
}

const ListChapter: FunctionComponent<any> = () => {

    const router = useRoute<RootRouteProps<'CHAPTER_LIST_SCREEN'>>();
    const { id } = router.params;

    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState<boolean>(false);
    let [page, setPage] = React.useState<number>(1);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [data, setData] = React.useState<any>([]);
    const [numberResult, setnumberResult] = React.useState<any>(0);

    React.useEffect(() => {
        (async () => {
            fetch(page)
        })()
        return () => setData([])
    }, [])

    const fetch = async (i: number) => {
        setLoading(true)
        const result = await getListChapter(i, id, 20)
        if (result?.data?.status == "success") {
            setData(result?.data?.data);
            setnumberResult(result?.data?.numberResult)
            setLoading(false);
        }
    }


    const getItemLayout = React.useCallback((_, index: number) => ({
        length: SCREEN_WIDTH / 10,
        offset: SCREEN_WIDTH / 10 * index,
        index
    }), [])

    const onFreshList = () => {
        setRefreshing(true);
        setData([])
        setPage(1);
        fetch(1)
        setRefreshing(false)
    }
    let _renderFooterList = (): any => {
        if (!refreshing && numberResult >= data.length) return true;
        return (
            <View style={{ paddingVertical: 10, backgroundColor: "#fff" }}>
                       <Loading></Loading>
            </View>
        )
    }

    let _onLoadMore = async () => {
        if (numberResult != data.length) {
            setRefreshing(true);
            const result = await getListChapter(page + 1, id, 20)
            if (result?.data?.status === "success") {
                setPage(page => page + 1);
                setData([...data, ...result?.data?.data]);
                setRefreshing(false)
            }
        }
        return;
    }

    const renderItem = React.useCallback(({ item }: any) => <Item item={item} key={item._id}></Item>, [])
    const keyExtractor = React.useCallback((item: any) => item._id.toString(), [])
    return (
        <View style={[styles.container]}>
            <StatusBar
                translucent={false}
                // backgroundColor="#61dafb"
            />
            <Header></Header>
            {
                loading ? (
                    <View style={styles.loading}>
                        <Loading></Loading>
                    </View>
                ) :
                    (
                        <FlatList
                            onEndReachedThreshold={1}
                            showsVerticalScrollIndicator={false}
                            data={data}
                            // maxToRenderPerBatch={5}
                            // windowSize={5}
                            bounces={false}
                            refreshing={false}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            onEndReached={_onLoadMore}
                            onRefresh={onFreshList}
                            getItemLayout={getItemLayout}
                            ListFooterComponent={_renderFooterList}
                        >
                        </FlatList>
                    )
            }
        </View>
    );
};
export default React.memo(ListChapter, isEqual)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    name: {
        fontSize: 16,
        color: '#5c6b73'
    },
    Chapter_: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#5bc6ff',
        padding: 20,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTitl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#5bc6ff',
    },
})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 15,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        margin: 0,
        paddingRight: 0, // to ensure the text is never behind the icon
    },

});