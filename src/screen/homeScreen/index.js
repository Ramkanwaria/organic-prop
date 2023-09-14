import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Platform, Alert, ImageBackground, Modal } from "react-native";
import { } from 'react-native-virtualized-view'
import imagePath from "../../theme/imagePath";
import AddModel from "./addModel";
import CityListModel from "./cityListModel";
import Header from "../../navigation/appHeader";
import styles from "./style";
import { BUY_RENT_PROPERTY_LIST, CITY_LIST, FAVORITY_PROPERTY, GET_DASHBOARD } from "../../Helper/ApiConstant";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";
import Loader from "../../component/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from 'react-native-virtualized-view';

const HomeScreen = (props) => {

    const [sellPropertyList, setSellPropertyList] = useState([]);
    const [pgPropertyList, setPgProlertyList] = useState([])
    const [leasePropertyList, setLeaseProlertyList] = useState([])
    const [dashBoardProperty, setDashBoardProperty] = useState([])
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [cityListVisible, setCityListVisible] = useState(false)
    const [loading, setLoading] = useState(false);
    const [cityListData, setCitylistData] = useState([])
    const isFocused = useIsFocused();
    const [selectCity, setSelectCity] = useState('')

    useEffect(() => {

        CityList()
        getCityName()
        if (isFocused) {
            GetDashboardApi('Ahmedabad', 'gota', 153)

        }
    }, [isFocused]);

    const getCityName = async () => {
        const CityName = await AsyncStorage.getItem('cityName');
        if (CityName) {
            setSelectCity(CityName)
        }

    }
    const GetDashboardApi = (city, landMark, cityId) => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("userid", "20");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(GET_DASHBOARD + `?City=${city}&LandMark=${landMark}&CityId=${cityId}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {
                    setDashBoardProperty(result?.data?.dashboard)
                    GetPropertylist(1, 1, 100)

                } else {
                    showErrorMsg(result.message)
                    setLoading(false)
                }
            })
            .catch(error => console.log('error', error));
    }
    const GetPropertylist = (buyId, pageNo, row) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(BUY_RENT_PROPERTY_LIST + `?BuyId=${buyId}&PageNumber=${pageNo}&Row=${row}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {
                    if (buyId == 1) {
                        setSellPropertyList(result?.data)
                        GetPropertylist(2, 1, 100)
                    }
                    else if (buyId == 2) {
                        setPgProlertyList(result?.data)
                        GetPropertylist(3, 1, 100)
                    } else if (buyId == 3) {
                        setLeaseProlertyList(result?.data)
                        setLoading(false)
                    }
                } else {
                    showErrorMsg(result.message);
                    setLoading(false)
                }
            })
            .catch(error => {
                showErrorMsg(error.message);
                setLoading(false)
            });
    }
    const FavoriteProperty = async (propertyId) => {
        setLoading(true)
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
                    GetPropertylist(1, 1, 100)

                } else {
                    showErrorMsg(result.message)
                    setLoading(false)
                }
            })
            .catch(error => {
                showErrorMsg(error.message)
                setLoading(false)
            });
    }
    const CityList = async () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(CITY_LIST, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.data) {
                    setCitylistData(result?.data)
                } else {
                    showErrorMsg(result?.message)
                    setLoading(false)
                }
            })
            .catch(error => {
                showErrorMsg(error.message);
                setLoading(false)
            });
    }

    const oneFlatList = () => {
        return (
            <View style={{ marginTop: 10, marginHorizontal: 15 }}>

                <FlatList
                    data={dashBoardProperty}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.8} onPress={() => {
                                    props.navigation.navigate('Property_Detail_One', {

                                    })
                                }}>
                                <View style={{}}>
                                    <ImageBackground
                                        source={require('../../Assest/images/placeHolder.jpeg')}
                                        style={styles.backImageStyle}
                                        imageStyle={styles.backImageStyle}
                                    >
                                        <Image
                                            source={{ uri: item.imgPath }}
                                            style={styles.mainImageStyle} />
                                    </ImageBackground>
                                    <View style={styles.backGroundImageStyle} />
                                </View>
                                <View style={{ position: 'absolute', marginLeft: 17, top: 77 }}>
                                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: "500" }}>{item.title}</Text>
                                    <Text style={{ fontSize: 13, color: '#fff', fontWeight: "400" }}>{item.count}</Text>
                                </View>


                            </TouchableOpacity>

                        );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />

            </View>

        )
    }
    const tranding = () => {
        return (
            <View style={{ marginTop: 10, marginHorizontal: Platform.OS === 'ios' ? 10 : 11.5 }}>
                <View style={styles.trendingView}>
                    <Text style={{ fontSize: 18, color: '#000000' }}>Trending properties for</Text>
                    <TouchableOpacity>
                        <Text style={styles.buyText}>Buy</Text>
                    </TouchableOpacity>

                    <Text style={{ opacity: 0 }}>Buy</Text>

                    <Image source={imagePath.next_arrow} style={styles.styleImg} />




                </View></View>
        )
    }
    const secondFlatList = () => {

        return (

            <View style={{ marginTop: 5, marginHorizontal: 10 }}>

                <FlatList

                    data={pgPropertyList?.slice(0, 4)}

                    renderItem={({ item, index }) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'column', marginHorizontal: Platform.OS === 'ios' ? 9 : 8,
                                }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                    props.navigation.navigate('Property_Detail_One',
                                        {
                                            item_Id: item?.id
                                        })
                                    //props.navigation.navigate('HomeScreen_Two')
                                }}>
                                    <View style={{}}>
                                        <Image source={item.filePath == null ? { uri: item.filePath } : require('../../Assest/images/placeHolder.jpeg')} style={styles.secondList} />
                                        <View style={styles.placeHolderImageStyle}>
                                            <View style={styles.likeImage}>
                                                <View>
                                                    <TouchableOpacity
                                                        activeOpacity={0.6}
                                                        onPress={() => {
                                                            FavoriteProperty(item?.id)
                                                        }}>
                                                        <Image style={{ width: 20, height: 20, marginRight: 0, bottom: 5, alignItems: 'center', alignSelf: 'center' }}
                                                            source={item.isfavorite == 0 ? imagePath.seven : imagePath.six}
                                                            resizeMode={'contain'}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        {/* <Image source={item.imgPath ? require('../../Assest/images/mainImage.png') : { uri: item.imgPath }} style={styles.propertyImageStyle} /> */}
                                        {/* // <Image={{}} source={item.imagepath == null ? 'staticpath : {uri:''.ckbvkljv;}}/> */}
                                        <View style={{ marginTop: 10, width: Platform.OS === 'ios' ? 158 : 165 }}>
                                            <Text numberOfLines={2} style={{ height: 34, fontSize: 14, color: '#000', marginRight: 7, }}>{item.title}</Text>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 5, marginHorizontal: 0 }}>
                                                <Image source={imagePath.hotel_bed} style={{
                                                    height: 16, width: 16,
                                                    marginRight: 5
                                                }} />
                                                <Text style={{ color: '#3D405B', fontSize: 10, marginRight: 2 }}>{item.bedRooms + " Bedrooms"}</Text>
                                                <Image source={imagePath.ruler} style={{ height: 16, width: 16, bottom: 3, marginRight: 2 }} />
                                                <Text style={{ color: '#3D405B', fontSize: 10 }}>{item.unitsize}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center', marginLeft: 7
                                    }}>
                                        <Image source={imagePath.reueya} style={{ width: 10, height: 12, right: 6 }} />
                                        <Text style={{ fontSize: 17, color: '#2B9330' }}>{item.rateRentValue}</Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <View style={styles.contactTouch}>
                                            <Text style={{ color: '#ffffff', fontSize: 13 }}>Contact Builder</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />

            </View>
            //

        )
    }
    const contactBuilder = () => {
        return (
            <View style={{ marginTop: 10, marginHorizontal: Platform.OS === 'ios' ? 10 : 11.5 }}>
                <View style={styles.trendingView}>
                    <Text style={{ fontSize: 18, color: '#000000' }}>Trending properties for</Text>
                    <TouchableOpacity>
                        <Text style={styles.buyText}>Sell</Text>
                    </TouchableOpacity>

                    <Text style={{ opacity: 0 }}>Buy</Text>

                    <Image source={imagePath.next_arrow} style={styles.styleImg} />
                </View>
                <FlatList

                    data={sellPropertyList?.slice(0, 4)}

                    renderItem={({ item, index }) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'column', marginHorizontal: Platform.OS === 'ios' ? 9 : 8,

                                }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                    props.navigation.navigate('Property_Detail_One',
                                        {
                                            item_Id: item?.id

                                        })
                                    //props.navigation.navigate('HomeScreen_Two')
                                }}>

                                    <View style={{}}>
                                        <Image source={item.filePath == null ? { uri: item.filePath } : require('../../Assest/images/placeHolder.jpeg')} style={styles.secondList} />
                                        <View style={styles.placeHolderImageStyle}>

                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate('Property_Detail_One', {

                                                })
                                            }}>
                                                {/* <Image style={{ width: 20, height: 17, }} source={require('../../Assest/images/six.png')} /> */}
                                            </TouchableOpacity>
                                            <View style={styles.likeImage}>
                                                <View>
                                                    <TouchableOpacity

                                                        activeOpacity={0.6}
                                                        onPress={() => {

                                                            FavoriteProperty(item?.id)

                                                        }}>
                                                        <Image style={{ width: 20, height: 20, marginRight: 0, bottom: 5, alignItems: 'center', alignSelf: 'center' }}
                                                            source={item.isfavorite == 0 ? imagePath.seven : imagePath.six}
                                                            resizeMode={'contain'}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10, }}>
                                            <Text style={{ fontSize: 14, color: '#000', marginRight: 7, }}>{item.title}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 0 }}>
                                            <Image source={imagePath.hotel_bed} style={{
                                                height: 18, width: 18, bottom: 3,
                                                marginRight: 5
                                            }} />
                                            <Text style={{ color: '#3D405B', fontSize: 11, marginRight: 3 }}>{item.bedRooms + " Bedrooms"}</Text>
                                            <Image source={imagePath.ruler} style={{ height: 18, width: 18, bottom: 3, marginRight: 3 }} />
                                            <Text style={{ color: '#3D405B', fontSize: 11 }}>{item.unitsize}</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center', marginLeft: 7
                                    }}>
                                        <Image source={imagePath.reueya} style={{ width: 10, height: 12, right: 6 }} />
                                        <Text style={{ fontSize: 17, color: '#2B9330' }}>{item.rateRentValue}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => {


                                        }} style={styles.contactTouch}>
                                            <Text style={{ color: '#ffffff', fontSize: 13 }}>Contact Builder</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    numColumns={2}
                    horizontal={false}
                    keyExtractor={item => item.id}
                />

            </View>

        )
    }

    const thirdFlatlist = () => {
        return (
            <View style={{ marginTop: 10, marginHorizontal: Platform.OS === 'ios' ? 10 : 11.5 }}>
                <FlatList
                    data={leasePropertyList?.slice(0, 4)}
                    renderItem={thirdFlatlistItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    const thirdFlatlistItem = ({ item, index }) => {

        return (
            <View
                key={index}
                style={{ flexDirection: 'column', marginTop: 10, marginHorizontal: 8 }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Property_Detail_One',
                        {
                            item_Id: item?.id

                        })

                }}>
                    <View style={{}}>
                        <Image source={item.filePath == null ? { uri: item.filePath } : require('../../Assest/images/placeHolder.jpeg')} style={styles.secondList} />
                        <View style={styles.placeHolderImageStyle}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                props.navigation.navigate('Property_Detail_One',
                                    {
                                        item_Id: item?.id
                                    })

                            }}>
                                {/* <Image style={{ width: 20, height: 17, }} source={require('../../Assest/images/six.png')} /> */}
                            </TouchableOpacity>
                            <View style={styles.likeImage}>
                                <View>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => {
                                            FavoriteProperty(item?.id)

                                        }}>
                                        <Image style={{ width: 20, height: 20, marginRight: 0, bottom: 5, alignItems: 'center', alignSelf: 'center' }}
                                            source={item.isfavorite == 0 ? imagePath.seven : imagePath.six}
                                            resizeMode={'contain'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <Text style={{ fontSize: 14, color: '#000', marginRight: 7, }}>{item.title}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 0 }}>
                            <Image source={imagePath.hotel_bed} style={{
                                height: 18, width: 18, bottom: 3,
                                marginRight: 5
                            }} />
                            <Text style={{ color: '#3D405B', fontSize: 11, marginRight: 3 }}>{item.bedRooms + " Bedrooms"}</Text>
                            <Image source={imagePath.ruler} style={{ height: 18, width: 18, bottom: 3, marginRight: 3 }} />
                            <Text style={{ color: '#3D405B', fontSize: 11 }}>{item.unitsize}</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', marginLeft: 7
                    }}>
                        <Image source={imagePath.reueya} style={{ width: 10, height: 12, right: 6 }} />
                        <Text style={{ fontSize: 17, color: '#2B9330' }}>{item.rateRentValue}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.contactTouch}>
                            <Text style={{ color: '#ffffff', fontSize: 13 }}>Contact Builder</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

            </View>
        );


    }
    const CityListComponent = () => {

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={cityListVisible}>
                    <View style={styles.centered_View}>
                        <View style={styles.modal_View}>
                            <View style={styles.cityListView}>
                                <Text style={styles.searchText}>City List</Text>
                                <TouchableOpacity onPress={() => {
                                    setCityListVisible(false)
                                }}>
                                    <Image source={require('../../Assest/images/cancleButton.png')} style={{}} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.View_item}>
                            </View>
                            <View>
                                <FlatList style={{ marginBottom: 80 }} ItemSeparatorComponent={<View style={styles.underlineStyle}></View>}
                                    data={cityListData}
                                    renderItem={({ item }) => {
                                        return (
                                            <View key={item} >
                                                <TouchableOpacity onPress={async () => {
                                                    setCityListVisible(false)

                                                    setSelectCity(item.cityName)
                                                    await AsyncStorage.setItem('cityName', item.cityName);
                                                }}>
                                                    <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-around', alignItems: 'center', }}>
                                                        <Text style={styles.cityListStyle}>{item.cityName}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>


            </View>
        )
    }
    const leftsideconponent = () => {
        return (
            <View style={{}}>
                <Text style={{ fontSize: 14, color: '#fff', marginBottom: 10 }}>Location</Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row', alignItems: 'center', width: "100%"
                    }}
                    onPress={() => setCityListVisible(true)}>

                    <Image source={imagePath.gps} style={{}} />
                    <Text style={{ fontSize: 18, color: '#fff', marginHorizontal: 10 }}
                    >{selectCity}
                    </Text>
                    <Image source={imagePath.downArrow} style={{ height: 10, width: 10, }} />
                </TouchableOpacity>
            </View >
        )
    }
    const rightsideComponent = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setDeleteModalVisible(true)}
                style={{ marginTop: 28 }}>
                <Image source={imagePath.searchIcon} style={{ width: 22, height: 22 }} />

                <AddModel
                    visible={deleteModalVisible}
                    conformBtn={() => {
                        setDeleteModalVisible(false);
                    }}
                    closeBtn={() => setDeleteModalVisible(false)}
                    navigation={props.navigation}
                    Data={props.Data}
                />

            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>

            <Header
                height
                placement={"left"}
                centerComponent={() => leftsideconponent()}
                rightComponent={() => rightsideComponent()} />
            <ScrollView scrollIndicatorInsets={false}>
                {oneFlatList()}
                {tranding()}
                {secondFlatList()}
                {contactBuilder()}
                {thirdFlatlist()}
                {CityListComponent()}

            </ScrollView>
            {loading == true ? <Loader /> : null}
        </View>
    )
}
export default HomeScreen;
