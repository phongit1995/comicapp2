// import React, { useState, useEffect } from 'react';
// import isEqual from 'react-fast-compare';
// import { View, Text, StyleSheet, TouchableOpacity, Easing, Image, Dimensions, ActivityIndicator, Animated, FlatList, StatusBar } from 'react-native';

// const { height, width } = Dimensions.get("window");
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import ImageFullWith from './ImageFullWith'
// function ListImage({ isSkew, _setIsEnabled, imagesList, scrollY, scrollYFooter, isEnabled, isOffset, _setisOffset }: any) {
//     const [offset_, setisOffset_] = useState(1);
//     let offset = new Animated.Value(offset_)
//     let [speed, setSpeed] = React.useState<number>(1)
//     let carousel = React.useRef<any>(null);

//     let [iscontent, setisContent] = React.useState<any>(true)
//     let [isspeed, setisSpeed] = React.useState<any>(true)
//     let [content, setContent] = React.useState<any>(height)
//     let scrollTo = React.useCallback((e) => {
//         if (carousel && isOffset) {
//             carousel.current.scrollToOffset({
//                 offset: e.value,
//                 animated: true
//             });
//         }
//     }, [])

//     let _scroller = () => {
//         let animation = Animated.timing(
//             offset,
//             {
//                 toValue: content,
//                 duration: 100000 / speed,
//                 easing: Easing.linear,
//                 useNativeDriver: true
//             }
//         );
//         animation.start(() => _scroller());
//     }

//     useEffect(() => {
//         if (isEnabled && isOffset) {
//             _scroller();
//             var _scrollTo = offset.addListener(scrollTo);
//         }
//         return () => offset.removeListener(_scrollTo)
//     }, [isEnabled, isOffset, content, speed, isSkew])

//     const onhandlerPause = () => {
//         _setisOffset(false)
//     }
//     const onhandlernext = () => {
//         if (isEnabled) {
//             _setisOffset(true)
//             _setIsEnabled(true)

//         }

//     }
//     const onhandlerSpeed = () => {
//         setisSpeed(true)
//         setSpeed((e: number): any => {
//             if (e === 1.5) {
//                 return 1
//             }
//             return e + 0.5
//         })
//         onhandlernext()

//     }
//     let renderItem = React.useCallback(({ item }) => <ImageFullWith isSkew={isSkew} url={item} />, [isSkew])
//     return (
//         <View style={styles.content}>
//             <FlatList
//                 style={{ paddingTop: height / 12 }}
//                 showsHorizontalScrollIndicator={false}
//                 initialNumToRender={10}
//                 showsVerticalScrollIndicator={false}
//                 data={imagesList ? imagesList : []}
//                 maxToRenderPerBatch={5}
//                 windowSize={5}
//                 keyExtractor={(item: any, index) => item + index}
//                 renderItem={renderItem}
//                 ref={ref => {
//                     carousel.current = ref;
//                 }}
//                 scrollEventThrottle={1}
//                 onMomentumScrollEnd={(e) => {

//                     if (!isOffset) {
//                         setisOffset_(e.nativeEvent.contentOffset.y)
//                     }
//                 }}
//                 onScroll={(e) => {
//                     if (isspeed) {
//                         setisOffset_(e.nativeEvent.contentOffset.y)
//                         setisSpeed(false)
//                     }
//                     if (iscontent) {
//                         setContent(e.nativeEvent.contentSize.height)
//                         setisContent(false)
//                     }
//                     if (!isOffset) {
//                         setisOffset_(e.nativeEvent.contentOffset.y)
//                     }

//                     scrollY.setValue(e.nativeEvent.contentOffset.y);
//                     scrollYFooter.setValue(e.nativeEvent.contentOffset.y)

//                 }}
//             />
//             {
//                 isEnabled ? (<TouchableOpacity
//                     onPress={onhandlerSpeed}
//                     activeOpacity={0.9}
//                     style={styles.speed}>
//                     <Text style={{ color: '#fff' }}>{speed.toString()}X</Text>
//                 </TouchableOpacity>) : null
//             }

//             {
//                 isEnabled ? isOffset ? (
//                     <TouchableOpacity style={styles.pause}
//                         onPress={onhandlerPause}
//                         activeOpacity={0.9}
//                     >
//                         <Ionicons name="pause-outline" size={20} color="#fff"></Ionicons>
//                     </TouchableOpacity>
//                 ) : (
//                         <TouchableOpacity style={styles.pause}
//                             onPress={onhandlernext}
//                             activeOpacity={0.9}
//                         >
//                             <Ionicons name="play-sharp" size={20} color="#fff"></Ionicons>
//                         </TouchableOpacity>
//                     ) : null
//             }

//         </View>
//     );

// }
// export default React.memo(ListImage, isEqual)

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,


//     },
//     containers: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     activityIndicator: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 80
//     },
//     Header: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         elevation: 1,
//         width: '100%',
//         flexDirection: "row",
//         paddingVertical: 10,
//         justifyContent: "center",
//         height: height / 9.5,
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: '#404042',
//         backgroundColor: '#404042',
//         paddingTop: 30,
//         zIndex: 10,

//     },
//     name: {
//         textTransform: 'uppercase',
//         fontSize: 15,
//         flex: 1,
//         textAlign: "center",
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     content: {
//         flex: 1
//     },
//     Img: {
//         width: "100%",
//         alignSelf: "center",
//         flexDirection: "row",
//         flex: 1,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 10,
//             height: 1,
//         },
//         shadowOpacity: 0.22,
//         shadowRadius: 0.9,
//         elevation: 5,
//     },
//     endchap: {
//         textAlign: 'center'
//     },
//     Footer: {
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         height: height / 13,
//         paddingHorizontal: 10,
//         elevation: 6,
//         width: width,
//         backgroundColor: '#404042',
//         justifyContent: "center",
//         opacity: 0.8,
//         zIndex: 10
//     },
//     textChapter: {
//         fontSize: 14,
//         color: "#b8b4b4"
//     },
//     pause: {
//         position: 'absolute',
//         bottom: '10%',
//         right: '5%',
//         zIndex: 999,
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: '#161a1d',
//         borderRadius: 10
//     },
//     speed: {
//         position: 'absolute',
//         bottom: '16%',
//         right: '5%',
//         zIndex: 999,
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: '#161a1d',
//         borderRadius: 10
//     }
// })
import React, { useState, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { View, Text, StyleSheet, TouchableOpacity, Easing, Image, Dimensions, ActivityIndicator, Animated, FlatList, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImageFullWith from './ImageFullWith'
function ListImage({ isSkew, _setIsEnabled, imagesList, scrollY, scrollYFooter, isEnabled, isOffset, _setisOffset }: any) {

    let [speed, setSpeed] = React.useState<number>(1)
    let carousel = React.useRef<any>(null);

    let IntervalTime = speed * 3000;
    let [isspeed, setisSpeed] = React.useState<any>(true)
    let [content, setContent] = React.useState<any>(height)
    let [CurrentSlide, setIndex] = React.useState<any>(0);
    const onItemIndexChange = React.useCallback(setIndex, []);
    let _timerId
    let _goToNextPage = () => {
        if (carousel.current) {
            if (CurrentSlide >= imagesList.length - 1) CurrentSlide = 0;
            carousel.current.scrollToIndex({
                index: ++CurrentSlide,
                animated: true,
            });
        }
    };

    let _stopAutoPlay = () => {
        if (_timerId) {
            clearInterval(_timerId);
            _timerId = null;
        }
    };
    let _scroller = () => {
        _timerId = setInterval(_goToNextPage, IntervalTime);
    };



    useEffect(() => {
        if (isEnabled && isOffset) {
            _stopAutoPlay()
            _scroller();
        }

        return () => {
            _stopAutoPlay()
        }
    }, [isEnabled, isOffset])

    const onhandlernext = () => {
        if (isEnabled) {
            _setisOffset(true)
            _setIsEnabled(true)

        }

    }
    const onhandlerSpeed = () => {
        if (speed === 1.5) {
            _setisOffset(false)
            setSpeed(0.5)
            return
        } else {
            setSpeed((e: number): any => {
                if (e === 1.5) {
                    _setisOffset(false)
                }
                return e + 0.5
            })
            onhandlernext()
        }

    }

    let renderItem = React.useCallback(({ item }) => <ImageFullWith isSkew={isSkew} url={item} />, [isSkew])
    return (
        <View style={styles.content}>
            <FlatList
                style={{ paddingTop: height / 12 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={imagesList ? imagesList : []}
                maxToRenderPerBatch={5}
                windowSize={5}
                keyExtractor={(item: any, index) => item + index}
                renderItem={renderItem}
                ref={ref => {
                    carousel.current = ref;
                }}
                scrollEventThrottle={16}
                // renderToHardwareTextureAndroid
                // bounces={false}

                onMomentumScrollEnd={(e) => {
                    const newIndex = Math.round(
                        e.nativeEvent.contentOffset.y / ((width * 3) / 2)
                    );

                    if (onItemIndexChange) {
                        onItemIndexChange(newIndex);
                    }
                }}
                onScroll={(e) => {
                    const newIndex = Math.round(
                        e.nativeEvent.contentOffset.y / ((width * 3) / 2)
                    );
                    if (onItemIndexChange) {
                        onItemIndexChange(newIndex);
                    }
                    scrollY.setValue(e.nativeEvent.contentOffset.y);
                    scrollYFooter.setValue(e.nativeEvent.contentOffset.y)
                }}
            />
            {
                isEnabled ?
                    (
                        <TouchableOpacity style={styles.pause}
                            onPress={onhandlerSpeed}
                            activeOpacity={0.9}
                        >
                            <Ionicons name={`${speed === 0.5 ? 'pause-outline' : 'play-sharp'}`} size={20} color="#fff">{speed === 0.5 ? null : speed.toString() + `X`}</Ionicons>
                        </TouchableOpacity>
                    )
                    : null
            }

        </View>
    );

}
export default React.memo(ListImage, isEqual)

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    Header: {
        position: "absolute",
        top: 0,
        left: 0,
        elevation: 1,
        width: '100%',
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "center",
        height: height / 9.5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#404042',
        backgroundColor: '#404042',
        paddingTop: 30,
        zIndex: 10,

    },
    name: {
        textTransform: 'uppercase',
        fontSize: 15,
        flex: 1,
        textAlign: "center",
        fontWeight: 'bold',
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
    },
    pause: {
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        zIndex: 999,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#161a1d',
        borderRadius: 10
    },
    speed: {
        position: 'absolute',
        bottom: '16%',
        right: '5%',
        zIndex: 999,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#161a1d',
        borderRadius: 10
    }
})
