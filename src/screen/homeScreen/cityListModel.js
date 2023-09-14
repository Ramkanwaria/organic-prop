import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import Colors from '../../theme/color';
import AppButton from '../../component/commanButton';
import imagePath from '../../theme/imagePath';

//import { createStackNavigator } from '@react-navigation/stack';
const CityListModel = (props, route) => {
    const [cityListData, setCitylistData] = useState([])
    const [cityListVisible, setCityListVisible] = useState(false)

    return (

        <Modal Modal
            animationType="slide"
            transparent={true}
            visible={props.visible} >
            <View style={styles.centered_View}>
                <View style={styles.modal_View}>
                    <View style={styles.searchView}>
                        <Text style={styles.searchText}>City List</Text>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => props.closeBtn()}>
                            <Image
                                source={imagePath.cancleButton}
                                resizeMode={'contain'}
                                style={styles.modal_image}
                            />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.View_item}>


                        <FlatList
                            data={cityListData}
                            renderItem={({ item, index }) => {
                                return (
                                    <View>
                                        <Text>{item.cityId}</Text>
                                    </View>
                                )
                            }}
                        />

                    </View>
                </View></View></Modal>
    );
};

const styles = StyleSheet.create({

    centered_View: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000aa',
    },
    modal_View: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: 500,
        width: '100%',
    },
    buyView: {
        backgroundColor: '#2B9330',
        padding: 10,
        margin: 10,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    allProject: {
        backgroundColor: '#2b9330',
        padding: 10,
        margin: 10,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    newproject: {
        backgroundColor: '#E1FEE3',
        padding: 10,
        margin: 10,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    titleOne: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'

    },
    titletwo: {
        backgroundColor: '#2B9330',
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    landView: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    villView: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    shopView: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    applyView: {
        backgroundColor: '#2B9330',
        padding: 10,
        margin: 10,
        paddingHorizontal: 60,
        borderColor: '#ffffff',
        borderRadius: 50,
    },
    resetView: {
        backgroundColor: '#E1FEE3',
        borderColor: '#2B9330',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        paddingHorizontal: 60,
        borderRadius: 50
    },
    buyViewOne: {
        backgroundColor: '#E1FEE3',
        padding: 10,
        margin: 10,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    modal_image: {
        width: 22,
        height: 22,
        alignSelf: "flex-end",
        marginHorizontal: 15,
        marginVertical: 5
    },
    modal_Text: {

        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        lineHeight: 27,
        color: Colors.primary.BLACK,
    },
    View_item: {
        backgroundColor: '#D8D8D8',
        height: 1.5,
        width: '100%',
        borderColor: '#D8D8D8'

    },
    searchView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 0,
        padding: 10
    },
    searchText: {
        flex: 1,
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
    }
});
export default CityListModel;