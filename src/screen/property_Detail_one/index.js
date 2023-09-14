
import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import imagePath from "../../theme/imagePath";
import Header from "../../navigation/appHeader";
import { BackgroundImage, color } from "@rneui/themed/dist/config";
import { FAVORITY_PROPERTY, PROPERTY_DERAIL } from "../../Helper/ApiConstant";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../component/Loader";
const Property_Detail_One = (props) => {
    const [like, setLike] = useState(false)
    const [propertyDetail, setPropertyDetail] = useState([])
    const [isReaction, setIsReaction] = useState([])
    const [loading, setLoading] = useState(false);

    let item_Id = props?.route?.params?.item_Id

    const Data = [
        {
            id: 1,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 2,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 3,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 4,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 5,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },


    ];
    useEffect(() => {
        getData()
        // setLoading(true)

    }, [])
    const getData = async () => {
        try {
            const userID = await AsyncStorage.getItem('USER_ID');
            PropertyDetail(userID, item_Id)
            // FavoriteProperty(userID,)

        } catch (error) {
            console.log(error)
        }
    }
    const PropertyDetail = (id, userID) => {
        var myHeaders = new Headers();
        myHeaders.append("userid", id);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(PROPERTY_DERAIL + `?Id=${userID}`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result.status) {
                    setPropertyDetail(result?.data)
                    //showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
                // setLoading(false)
            })
            .catch(error => {
                //   setLoading(false)
                showErrorMsg(error.message)
            });
    }
    const FavoriteProperty = async (propertyId) => {
        // setLoading(true)
        const userID = await AsyncStorage.getItem('USER_ID');
        const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');

        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Property_id": propertyId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch(FAVORITY_PROPERTY, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    PropertyDetail(userID, propertyId)
                } else {
                    showErrorMsg(result.message)
                }
                // setLoading(false)
            })
            .catch(error => {
                showErrorMsg(error.message)
            });
    }
    const FlatListComponent = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{}}>
                                <View style={styles.itemContent}>
                                    <BackgroundImage style={styles.mainImageStyle}
                                        imageStyle={styles.mainImageStyle}
                                        source={require('../../Assest/images/placeHolder.jpeg')}>
                                        <Image source={item.photo} style={styles.mainImageStyle} />
                                    </BackgroundImage>

                                </View>
                            </View>
                        );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
                <View>
                </View>
            </View>

        )
    }
    const conttactConponent = () => {

        return (
            <View style={styles.propertyView}>
                <Text style={{ fontSize: 20 }}>{propertyDetail?.propertyCode}</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {

                }}>
                    <View style={styles.contactView}>
                        <Text style={{ color: '#fff', fontSize: 13 }}>Contact</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const BedroomsCompnent = () => {

        return (
            <View>
                <View style={{ marginHorizontal: 20, bottom: 10 }}>
                    <Text style={styles.addressText}>{propertyDetail.title}</Text>
                </View>
                <View style={styles.mainView}>
                    {propertyDetail?.bedRooms != "0" &&
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imagePath.hotel_bed} style={styles.bedImageStyle} />
                            <Text style={styles.bedroomText}>{propertyDetail?.bedRooms + ' Bedrooms'}</Text>
                        </View>
                    }
                    {!propertyDetail?.flatAreaUnit?.includes("0") && (
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imagePath.ruler} style={styles.rulerImageStyle} />
                            <Text style={styles.flatAreaUnitText}>{propertyDetail?.flatAreaUnit}</Text>
                        </View>
                    )}

                </View>
                <Text style={styles.DescriptionTExt}>{propertyDetail?.description}</Text>
                <View style={styles.rupiyaView}>
                    <Image source={imagePath.reueya} style={{ width: 10, height: 12 }} />
                    <Text style={styles.reteText}>{propertyDetail.rateRentValue + ''} </Text>
                </View>
                <>


                    <View style={styles.mapMainView}>
                        {propertyDetail?.tagList?.map((mapData, index) => {

                            return (
                                <View style={styles.mapViewStyle} key={index}>

                                    <Text style={styles.mapDataStyle}>{mapData}</Text>
                                </View>
                            )
                        })}
                    </View>
                </>

            </View>
        )
    }
    const rightsideComponent = () => {

        return (
            <View style={styles.rightComponentStyle}>
                <View>
                    <TouchableOpacity

                        activeOpacity={0.6}
                        onPress={() => {
                            // propertyDetail?.id
                            // setLike(!like);
                            FavoriteProperty(propertyDetail?.id)
                            // alert(propertyDetail?.id)
                        }}>
                        <Image style={{ width: 20, height: 20 }}
                            source={propertyDetail?.isfavorite == 0 ? imagePath.seven : imagePath.six}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const leftsideconponent = () => {
        return (
            <View style={{}}>

                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.goBack();
                }}>
                    <Image source={imagePath.next} style={{}} />
                </TouchableOpacity>



            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={() => leftsideconponent()}
                rightComponent={() => rightsideComponent()}
                title={'Property Details'}
            />

            <ScrollView scrollIndicatorInsets={false}>
                {FlatListComponent()}
                {conttactConponent()}
                {BedroomsCompnent()}

            </ScrollView>
            {loading == true ? <Loader /> : null}
        </View>

    );
}
export default Property_Detail_One;
const styles = StyleSheet.create({
    container: { flex: 1 },
    mapDataStyle: { color: '#6A6A6A', fontSize: 16, textAlign: 'center' },
    mapViewStyle: {
        backgroundColor: '#E1FEE3',
        padding: 8,
        margin: 5,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderColor: '#E1FEE3',
        borderWidth: 1,
    },
    bedImageStyle: { height: 20, width: 20, alignItems: 'center', justifyContent: 'center', },
    rulerImageStyle: { height: 15, width: 15, marginLeft: 4 },
    flatAreaUnitText: { fontSize: 12, marginLeft: 4, color: '#000' },
    rupiyaView: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 15 },
    reteText: { color: '#2B9330', fontSize: 18, marginLeft: 5 },
    mapMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        flexWrap: "wrap"
    },
    addressText: { color: '#000', fontSize: 17 },
    DescriptionTExt: { color: "#000", fontSize: 15, marginHorizontal: 20, marginTop: 10 },
    rightComponentStyle: {

        height: 33, width: 33,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 30,
        padding: 8,
        alignItems: 'center',
        //alignSelf: 'center',
        marginRight: 5,
    },
    itemContent: {
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    propertyView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 20
    },
    contactView: {
        backgroundColor: '#2b9330',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 30,
        padding: 8,
        marginHorizontal: 3
    },
    mainView: { flexDirection: 'row', alignItems: 'center', marginTop: 0, marginHorizontal: 20 },
    bedroomText: { fontSize: 12, marginLeft: 4, color: '#000' },
    mainImageStyle: {
        width: 260,
        height: 160,
        borderRadius: 5,
        resizeMode: 'cover',
        borderColor: '#fff',
        borderWidth: 0.6
    }

})