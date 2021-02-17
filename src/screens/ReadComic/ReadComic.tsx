import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler, Image, Dimensions, ActivityIndicator, Animated, FlatList, StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get("window");
import { getDetailChapter } from './../../api/comic'

import Orientation from 'react-native-orientation';
import { useRoute, RouteProp } from '@react-navigation/native';
import Modals from './Modals';
import Footer from './Footer';
import ListImage from './ListImage';
import Loading from '../../components/Loading';
import {STATUS_BAR_HEIGHT} from '../../constants'
export type RootStackParamList = {
    DETIAL_CHAPTER: { id: 'id', idChap: '_idChap' };
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

export default function ReadComic() {

    const router = useRoute<RootRouteProps<'DETIAL_CHAPTER'>>();
    const { id, idChap } = router.params;
    const [modalVisible, setModalVisible] = React.useState(false);
    const navigation = useNavigation<any>();
    const [name, setName] = useState<any>(null);
    const [imagesList, setImagesList] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true);
    const [beforeChapter, setBeforeChapter] = useState(null);
    const [afterChapter, setAfterChapter] = useState(null);
    const scrollY = new Animated.Value(0);
    const scrollYFooter = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, height / 9.5)
    const [isSkew, setisSkew] = useState<boolean>(false)
    const translateY = diffClamp.interpolate({
        inputRange: [0, height / 9.5],
        outputRange: [0, -(height / 9.5)]
    })
    let _setisSkew = (e: boolean) => {
        setisSkew(e)
    }
    React.useEffect(() => {
        const backAction = () => {
            Orientation.lockToPortrait()
            navigation.goBack()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const diffClampFooter = Animated.diffClamp(scrollYFooter, 0, height / 13)
    const [isOffset, setisOffset] = useState(true);
    const translateYFooter = diffClampFooter.interpolate({
        inputRange: [0, height / 13],
        outputRange: [0, height / 13]
    })
    const _setisOffset = (e: boolean) => {
        setisOffset(e)
    }
    const _toggleSwitch = (e: boolean) => {
        setIsEnabled(e => !e);
        setisOffset(true)
        _setModalVisible(false)
    }

    const _setIsEnabled = (e: boolean) => {
        setIsEnabled(e);
    }

    let _setModalVisible = (e: boolean) => {
        setModalVisible(e)
    }


    useEffect(() => {
        (async () => {
            try {
                let resultData = await getDetailChapter(id)
                if (resultData?.data?.status == "success") {
                    setName("Chapter : " + resultData.data.data.index);
                    setAfterChapter(resultData.data?.data?.after);
                    setBeforeChapter(resultData.data?.data?.before);
                    setImagesList(resultData.data?.data?.images);
                    setIsLoading(false)
                }

            } catch (error) {
                console.log(error)
            }
        })()
        return () => {
            setName(null)
            setAfterChapter(null)
            setBeforeChapter(null)
            setImagesList(null)
            setIsLoading(true)

        }
    }, [])


    if (isLoading) {
        return (
            <View style={styles.containers}>
                <Loading></Loading>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} translucent backgroundColor="transparent" />
                <Animated.View style={[styles.Header, {
                    transform: [
                        { translateY: translateY }
                    ]
                }]}>
                    <TouchableOpacity
                        onPress={() => {
                            Orientation.lockToPortrait()
                            navigation.goBack()
                        }}
                    >
                        <Entypo name="chevron-thin-left" color="#fff" size={20} style={{ paddingLeft: 5 }} />
                    </TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                    <View style={{ flexBasis: 20 }}></View>
                </Animated.View>
                <ListImage {...{ isSkew, _setIsEnabled, imagesList, scrollY, scrollYFooter, isEnabled, isOffset, _setisOffset }}></ListImage>
                <Footer {...{ idChap, translateYFooter, beforeChapter, afterChapter, _setModalVisible }}></Footer>
                <Modals {...{ _setisSkew, modalVisible, _setModalVisible, isEnabled, _toggleSwitch }}></Modals>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    Header: {
        position: "absolute",
        top: 0,
        left: 0,
        elevation: 1,
        width: '100%',
        flexDirection: "row",
        paddingHorizontal:10,
        justifyContent: "center",
        height: height / 9.5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#404042',
        backgroundColor: '#404042',
        paddingTop:STATUS_BAR_HEIGHT,
        zIndex: 10,

    },
    name: {
        textTransform: 'uppercase',
        fontSize: 15,
        flex: 1,
        textAlign: "center",
        fontFamily: 'Nunito-Bold',
        color: '#fff',
    },
    content: {
        flex: 1
    },
    Img: {
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.9,
        elevation: 5,
    },
    endchap: {
        textAlign: 'center'
    },
    Footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: height / 13,
        paddingHorizontal: 10,
        elevation: 6,
        width: width,
        backgroundColor: '#404042',
        justifyContent: "center",
        opacity: 0.8,
        zIndex: 10
    },
    textChapter: {
        fontSize: 14,
        color: "#b8b4b4"
    }
})
