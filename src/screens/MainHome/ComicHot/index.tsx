import React, { FunctionComponent } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import Item from './Item';
import * as SCREEN from '../../../constants/ScreenTypes';
import { SCREEN_WIDTH } from '../../../constants'
import { ItemComicProps } from '../MainHome'
import { useNavigation } from '@react-navigation/native';
import { iconload } from '../../../constants'
import Loading from '../../../components/Loading';
type ComicHotProps = {
    listComic: ItemComicProps[],
    loading: boolean,
    children: string,
    type: number
}

export type itemProps = {
    item: ItemComicProps
}

const ComicHot: FunctionComponent<ComicHotProps> = ({ listComic, loading, children, type }) => {
    const navigation = useNavigation();
    const renderItem = React.useCallback(({ item }: itemProps) => <Item item={item} key={item._id}></Item>, [])
    const keyExtractor = React.useCallback((item: ItemComicProps) => item._id.toString(), [])

    const getItemLayout = React.useCallback((_, index: number) => ({
        length: SCREEN_WIDTH * 0.6,
        offset: (SCREEN_WIDTH * 0.6) * index,
        index
    }), [])

    return (
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <Text style={styles.title}>{children}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(SCREEN.SHOWALL_LIST_SCREEN, { type })}
                >
                    <Text style={styles.seenAll}>see all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerItem}>
                {
                    loading ?
                        <View style={styles.loading}>
                            <Loading></Loading>
                        </View> :
                        (
                            <FlatList
                                horizontal
                                onEndReachedThreshold={1}
                                showsHorizontalScrollIndicator={false}
                                data={listComic}
                                maxToRenderPerBatch={5}
                                windowSize={5}
                                renderItem={renderItem}
                                keyExtractor={keyExtractor}
                                getItemLayout={getItemLayout}
                            >

                            </FlatList>
                        )
                }
            </View>
        </View>

    )
}
export default React.memo(ComicHot)
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
    
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Nunito-Bold',
        fontWeight: 'normal'
    },
    seenAll: {
        fontSize: 14,
        marginRight: 20,
        color: '#000',
        fontFamily: 'Nunito-Bold',
        fontWeight: 'normal'
    }
})