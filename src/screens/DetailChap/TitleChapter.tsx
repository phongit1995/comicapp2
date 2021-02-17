
import React, { FunctionComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform
} from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import isEqual from 'react-fast-compare';
import { DetailChapProps } from './DetailChap'
import { STATUS_BAR_HEIGHT } from '../../constants'
interface objProps {
    label: string,
    value: string,
}

type TitleChapterProps = {
    data: DetailChapProps | null,
    page: string,
    loading: boolean,
    _setPage: (e: string) => void;
}

const TitleChapter: FunctionComponent<TitleChapterProps> = ({ data, page, loading, _setPage }) => {

    const [selectedValue, setSelectedValue] = React.useState<objProps[]>([]);

    React.useEffect(() => {
        (() => {
            if (data) {
                let arr: objProps[] = []
                for (var i: number = 1; i <= Math.ceil(data.numberResult / 20); i++) {
                    let obj: objProps = {
                        label: i.toString(),
                        value: i.toString(),
                    }
                    arr.push(obj)
                }
                setSelectedValue(arr)
            }
        })()
        return () => setSelectedValue([])
    }, [loading])

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.total}>
                <Text style={{
                    fontSize: 15,
                    color: '#000',
                    fontFamily: 'Nunito-Bold',
                }}>Total </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Nunito-Bold',
                }}>{data?.numberResult ? data?.numberResult : '...'} Chapter</Text>
            </View>
            <View style={[styles.containerTitl]}>
                <Text style={{
                    fontSize: 20, padding: 20, paddingBottom: 5, paddingTop: 0, color: '#000', fontFamily: 'Nunito-Bold',
                }}>Chapter</Text>
                <View style={{
                    width: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: -35
                }}>
                    <Text style={{
                        fontSize: 15, color: '#000',
                        fontFamily: 'Nunito-Bold',
                    }}>Page</Text>
                    <View style={{ width: '50%' }}>
                        <RNPickerSelect
                            onValueChange={(value: string) => _setPage(value)}
                            placeholder={{ label: page.toString(), value: page.toString() }}
                            value={page.toString()}
                            items={selectedValue}
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    top: Platform.OS === 'android' ? 24 : 14,
                                    right: 55,
                                },
                                placeholder: {
                                    color: '#000',
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    fontFamily: 'Nunito-Bold',

                                },
                            }}
                            Icon={() => {
                                return (
                                    <View
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderTopWidth: 5,
                                            borderTopColor: '#000',
                                            borderRightWidth: 5,
                                            borderRightColor: 'transparent',
                                            borderLeftWidth: 5,
                                            borderLeftColor: 'transparent',
                                            width: 0,
                                            height: 0,
                                        }}
                                    />
                                );
                            }}
                        />
                    </View>
                </View>

            </View>
        </View>

    );
};
export default React.memo(TitleChapter, isEqual)

const styles = StyleSheet.create({
    total: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop:10,
        // paddingBottom:10,
        // borderBottomWidth: 1,
        // borderColor: '#d6d6d6',
    },
    containerTitl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#d6d6d6',
        zIndex: 999,
        backgroundColor: '#fff',

    },
})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,

        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 0, // to ensure the text is never behind the icon
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