import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Colors from '../../theme/color';
import AppButton from '../../component/commanButton';
import imagePath from '../../theme/imagePath';

//import { createStackNavigator } from '@react-navigation/stack';
const AddModel = (props, route) => {
    const [select, setSelect] = useState('All Projects');
    const [propery, setProperty] = useState('Residential');
    const [data, setData] = useState('Rent');
    const PropertyData = [
        {
            id: 0,
            title: 'Buy'
        },
        {
            id: 1,
            title: 'Rent'
        }
    ]
    const Property_Detail = [
        {
            id: 1,
            title: 'Commercial',
            image: imagePath.BuildingImg,
        },
        {
            id: 2,
            title: 'Residential',
            image: imagePath.Home,
        },
        {
            id: 3,
            title: 'Land/Plot',
            image: imagePath.landLot,

        },
        {
            id: 4,
            title: 'Villa',
            image: imagePath.BuildingImg
        },
        {
            id: 5,
            title: 'Shop',
            image: imagePath.shop
        }
    ];
    const projectType = [
        {
            id: 1,
            Title: 'New Projects'
        },
        {
            id: 2,
            Title: 'All Projects'
        }
    ]
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    return (

        <Modal Modal
            animationType="slide"
            transparent={true}
            visible={props.visible} >
            <View style={styles.centered_View}>
                <View style={styles.modal_View}>
                    <View style={styles.searchView}>
                        <Text style={styles.searchText}>Search Properties</Text>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => props.closeBtn()}>
                            <Image
                                source={imagePath.cancleButton}
                                resizeMode={'contain'}
                                style={styles.modal_image}
                            />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.View_item}>



                    </View>


                    <View style={{ marginHorizontal: 10 }}>
                        <View key={projectType} style={{ flexDirection: 'row', marginTop: 10 }}>
                            {PropertyData.map((property, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setData(property.title)

                                        }}>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 0 }}>
                                            <View style={{
                                                padding: 10,
                                                margin: 10,
                                                paddingHorizontal: 40,
                                                borderRadius: 8,
                                                flexDirection: 'row',
                                                alignItems: 'center', backgroundColor:
                                                    data == property.title ? '#2B9330' : '#E1FEE3'
                                            }}>
                                                <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                                                    <Text style={{ fontSize: 16, color: data == property.title ? '#fff' : '#2B9330' }}>{property.title}</Text>


                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                    </View>

                    <View style={{ marginTop: 10, marginHorizontal: 15 }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginHorizontal: 0, marginTop: 5 }}>Project Type</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View key={projectType} style={{ flexDirection: 'row', marginTop: 0 }}>
                            {projectType.map((TypeProperty, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setSelect(TypeProperty.Title)

                                        }}>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 0 }}>
                                            <View style={{
                                                padding: 10,
                                                margin: 10,
                                                paddingHorizontal: 38,
                                                borderRadius: 8,
                                                flexDirection: 'row',
                                                alignItems: 'center', backgroundColor:
                                                    select == TypeProperty.Title ? '#2B9330' : '#E1FEE3'
                                            }}>
                                                <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                                                    <Text style={{ fontSize: 16, color: select == TypeProperty.Title ? '#fff' : '#2B9330' }}>{TypeProperty.Title}</Text>


                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                        <Text style={{
                            color: '#000000', fontSize: 18, fontWeight: '500', marginHorizontal: 10, marginTop: 5
                        }}>Property Type</Text>
                        <View style={{
                            flexDirection: 'row', flexWrap: "wrap", marginTop: 5, // width: 320,marginRight: 30// justifyContent: 'space-between', marginHorizontal: 15,  marginTop: 10
                        }}>
                            {Property_Detail.map((Type, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={{ marginTop: 0 }}>
                                        <TouchableOpacity

                                            onPress={() => {
                                                setProperty(Type.title)
                                            }}>
                                            <View style={{ flexDirection: 'row', marginHorizontal: 0 }}>
                                                <View style={{
                                                    padding: 10,
                                                    margin: 8,
                                                    paddingHorizontal: 10,
                                                    borderRadius: 10,
                                                    borderColor: '#BCBCBC',
                                                    borderWidth: 1,
                                                    flexDirection: 'row',
                                                    alignItems: 'center', backgroundColor:
                                                        propery == Type.title ? '#2B9330' : '#fff'
                                                }}>
                                                    <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                                                        <Image source={Type.image} style={{
                                                            tintColor: propery == Type.title ? '#FDFBFB' : '#6A6A6A',
                                                            height: 20, width: 20, marginRight: 7
                                                        }} />

                                                        <Text style={{ color: propery == Type.title ? '#FDFBFB' : '#6A6A6A' }}>{Type.title}</Text>

                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10,
                        marginTop: 20, marginHorizontal: 10
                    }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            props.closeBtn()
                            props.navigation.navigate("HomeScreen_Two")
                        }} style={styles.applyView}>
                            <Text style={{ fontSize: 18, color: '#ffffff' }}>Apply</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resetView} activeOpacity={0.8} onPress={() => {
                            setData("Rent")
                            setSelect("All Projects")
                            setProperty("Residential")


                        }}>

                            <Text style={{ color: '#2b9330', fontSize: 18 }}>Reset</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </Modal >

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
        paddingHorizontal: 58,
        borderColor: '#ffffff',
        borderRadius: 50,
    },
    resetView: {
        backgroundColor: '#E1FEE3',
        borderColor: '#2B9330',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        paddingHorizontal: 58,
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
        color: '#000000',
        fontSize: 20,
        marginHorizontal: 10
    }
});
export default AddModel;