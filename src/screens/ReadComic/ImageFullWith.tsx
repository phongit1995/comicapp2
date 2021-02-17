import React, { useState, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { Image, Dimensions, ActivityIndicator, Animated, FlatList, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");


const ImageFullWith = React.memo(({ isSkew, url }: any) => {

    const [heightImage, setHeightImage] = useState<any>((width * 3) / 2);
    useEffect(() => {
        (() => {
            Image.getSizeWithHeaders(url, {
                Referer: "https://manganelo.com/"
            }, (withdata, heightdata) => {
                if (heightdata) {
                    setHeightImage(width * (heightdata / withdata))
                }

            }, (error) => { })

        })()
        return () => setHeightImage((width * 3) / 2.4)
    }, [])

    return <Image style={{ width: "100%", height: isSkew ? (width * 3) : heightImage, flex: 1 }}
        source={{
            uri: url,
            headers: {
                Referer: "https://manganelo.com/"
            }
        }} resizeMode="stretch" onError={({ nativeEvent: { error } }) => { console.log(error) }}
    />
})
export default React.memo(ImageFullWith, isEqual)