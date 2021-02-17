import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, Platform, StatusBar, } from 'react-native';
import TabActionBar from './TabActionBar'
import Header from './Header';
import Background from './Background';
import isEqual from 'react-fast-compare';
import ComicHot from './ComicHot';
import { getListTypeCommic } from './../../api/comic';
import Category from './Category';


export type ItemComicProps = {
    author: string,
    category: any,
    chapter_update: string,
    chapter_update_count: number,
    commentCount: number,
    createdAt: string,
    description: string,
    devices: any,
    enable: true,
    first_chapter: string,
    image: string,
    last_chapter: string,
    manga_status: number,
    name: string,
    updatedAt: string,
    url: string,
    views: number,
    __v: number,
    _id: string,
}


type listComicProps = {
    listComicHot: ItemComicProps[],
    listComicHUpdate: ItemComicProps[]
}

const MainHome: FunctionComponent = () => {

    const [loading, setLoading] = React.useState<boolean>(false);
    const [refreshing, setRefreshing] = React.useState<boolean>(false);
    const [listComic, setListComic] = React.useState<listComicProps | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                fetchData()
            } catch (error) {
                console.log(error)
            }
        })()
        return () => {
            setListComic(null)
            setRefreshing(false)
            setLoading(false)
        }
    }, [])

    const fetchData = async () => {
        setLoading(true);
        const [resultListHot, resultListUpdate] = await Promise.all([getListTypeCommic(1, 10, 0), getListTypeCommic(1, 10, 1)])
        if (resultListHot.data.status === "success" && resultListHot.data.code === 200) {
            setListComic({
                listComicHot: resultListHot.data?.data,
                listComicHUpdate: resultListUpdate.data?.data
            })
            setLoading(false);
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        setListComic(null)
        fetchData()
        setRefreshing(false)
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} translucent={true} backgroundColor="transparent" />
            <ScrollView
                scrollEventThrottle={1}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Header></Header>
                {/* <Background></Background> */}
                <TabActionBar></TabActionBar>
                <ComicHot {...{ listComic: listComic ? listComic.listComicHot : [], loading, type: 0 }}>Top Manga</ComicHot>
                <Category></Category>
                <ComicHot {...{ listComic: listComic ? listComic.listComicHUpdate : [], loading, type: 1 }}>New Manga</ComicHot>
            </ScrollView>
        </View>
    )
}
export default React.memo(MainHome, isEqual)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    distant: {
        height: 10,
        backgroundColor: '#ccc7c7',
        marginVertical: 10
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})