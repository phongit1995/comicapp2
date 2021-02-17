import React, { FunctionComponent } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import Item from './Item';
import * as SCREEN from '../../../constants/ScreenTypes';
import { SCREEN_WIDTH } from '../../../constants'
import { getListTypeCommic } from '../../../api/comic';

const ListComic: FunctionComponent = () => {
    const [listComic, setListComic] = React.useState<any | null>(null);
    React.useEffect(() => {
        (async () => {
            fetchData()
        })()
        return () => {
            setListComic(null)
        }
    }, [])


    const fetchData = async () => {

        const resultListHot = await getListTypeCommic(1, 10, 0)
        if (resultListHot.data.status === "success" && resultListHot.data.code === 200) {
            setListComic(resultListHot.data?.data)

        }
    }


    const renderItem = React.useCallback(({ item }) => <Item item={item} key={item._id}></Item>, [])
    const keyExtractor = React.useCallback((item) => item._id.toString(), [])

    const getItemLayout = React.useCallback((_, index: number) => ({
        length: SCREEN_WIDTH * 0.6,
        offset: (SCREEN_WIDTH * 0.6) * index,
        index
    }), [])

    return (
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <Text style={styles.title}>{listComic ? 'Continue Reading' : null}</Text>
            </View>
            <View style={styles.containerItem}>
                <FlatList
                    horizontal
                    onEndReachedThreshold={1}
                    showsHorizontalScrollIndicator={false}
                    data={listComic ? listComic : []}
                    maxToRenderPerBatch={5}
                    windowSize={5}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    getItemLayout={getItemLayout}
                >
                </FlatList>
            </View>
        </View>

    )
}
export default React.memo(ListComic)
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginBottom: 5,
        flex: 1
    },
    containerItem: {
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    loading: {
        flex: 1,
        height: SCREEN_WIDTH / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        marginVertical: 10,

    },
    title: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Nunito-Bold',
        fontWeight: 'normal'
    },
})