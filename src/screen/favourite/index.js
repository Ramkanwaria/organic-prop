import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from "react-native";
//import BottomTab from "../../navigation/bottomTab";
import imagePath from "../../theme/imagePath";
import Colors from "../../theme/color";
import Header from "../../navigation/appHeader";
import fonts from "../../theme/fonts";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITY_PROPERTY, USER_FAV_PROPERTY_LIST } from "../../Helper/ApiConstant";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";
import { useIsFocused } from "@react-navigation/native";
import EmptyListComponent from "../../component/EmptyListComponent"
import { ScrollView } from "react-native";
const Favourite = (props) => {
    const [isRefresh, setIsRefresh] = useState(false)
    const [click, setClick] = useState(false)
    const [reaction, setReaction] = useState([])
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            Favourite_Property_List()
        }
    }, [props, isFocused]);

    const Favourite_Property_List = async () => {
        const userID = await AsyncStorage.getItem('USER_ID');
        const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');
        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));
        var formdata = new FormData();
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch(USER_FAV_PROPERTY_LIST, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    setReaction(result.data)
                    showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => {
                showErrorMsg(error.message)
                console.log(error, 'error')
            });
    }

    const FavoriteProperty = async (propertyId) => {
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
        // console.log(requestOptions, '<=====DATA')
        fetch(FAVORITY_PROPERTY, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    // setIsRefresh(!isRefresh)
                    Favourite_Property_List()

                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => {
                showErrorMsg(error.message)
            });
    }
    const renderItem = ({ inedx, item, id }) => {

        return (
            <View   >
                <View style={{ marginHorizontal: 20, marginTop: 5, }} >

                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.navigate('Property_Detail_One', {
                            item_Id: item.id
                        })
                    }}>
                        <ImageBackground source={require('../../Assest/images/placeHolder.jpeg')}
                            style={styles.imageStyle}
                            resizeMode="stretch">
                            <Image style={styles.imageStyle}
                                source={{ uri: item?.filePath }} />
                        </ImageBackground>
                        <View style={styles.likeImage}>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() => {
                                        FavoriteProperty(item?.id)
                                    }}>
                                    <Image style={{ width: 20, height: 20 }}
                                        source={item?.isFavorite == 0 ? imagePath.seven : imagePath.six}
                                        resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.wardText}>{item?.title}</Text>
                        <View style={styles.mainView}>
                            {item?.bedRooms != "" &&
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={imagePath.hotel_bed} style={styles.firstImage} />
                                    <Text style={styles.bedText}>
                                        {item?.bedRooms + ' Bedrooms'}
                                    </Text>
                                </View>}



                            {item.unitName && <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={imagePath.ruler} style={styles.secondImage} />
                                <Text style={styles.sqftText}>{item.unitName} </Text>
                            </View>}

                        </View>

                        <View style={styles.secondView}>
                            <Image source={imagePath.reueya} style={styles.reueyaImage} />
                            <Text style={styles.headingStyle}>{item.price}</Text>

                            <Text style={styles.lakhaText}>85 Lakhas</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.contactTouch}>
                                <Text style={styles.contactText}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
    const flatList = () => {
        return (

            <View style={styles.container} >
                {reaction.length == 0 ? < EmptyListComponent
                    centerImage={imagePath.EmptyFavImage}
                    textName={"Empty Wishlist"}
                /> : <FlatList

                    data={reaction}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />}
            </View>
        )
    }

    const rightSideComponent = () => {
        return (
            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Add_propertyDetail')
                }}>
                    <Image source={imagePath.Group_6} style={styles.rightContain} />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header
                title={"Favourite List"}
                rightComponent={() => rightSideComponent()}
            />

            {flatList()}


        </View>
    )
}
export default Favourite;

