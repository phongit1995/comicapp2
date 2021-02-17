import React, { FunctionComponent } from 'react'
import isEqual from 'react-fast-compare';
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import Swiper from 'react-native-swiper'
import { SCREEN_WIDTH, SCREEN_WIDTH_No } from '../../constants/index'
import Wave from '../../themes/icons/Wave';

const Slide: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Swiper
                    showsButtons={false}
                    activeDotColor={'#fff'}
                    autoplay={true}
                    autoplayTimeout={5}
                    paginationStyle={{ bottom: 25 }}
                >
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={{ uri: 'http://cn.e.pic.mangatoon.mobi/homepage-banners/642-034f.jpg' }}></Image>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.img} source={{ uri: 'http://cn.e.pic.mangatoon.mobi/homepage-banners/641-58a3.jpg' }}></Image>
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.img} source={{ uri: 'http://cn.e.pic.mangatoon.mobi/homepage-banners/577-7b9a.jpg' }}></Image>
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.img} source={{ uri: 'http://cn.e.pic.mangatoon.mobi/homepage-banners/677-e874.jpg' }}></Image>
                    </View>
                </Swiper>
            </View>
            <View style={{ position: 'absolute', top: (SCREEN_WIDTH / 1.4) - 90, zIndex: 1 }}>
                <Wave></Wave>
            </View>
        </View>
    );
}
export default React.memo(Slide, isEqual)
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    wrapper: {
        height: SCREEN_WIDTH / 1.4,
        width: SCREEN_WIDTH,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: SCREEN_WIDTH_No,
        height: "100%",
        resizeMode: 'cover',

    }
})
