
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
//import BottomTab from "../../navigation/bottomTab";
import imagePath from "../../theme/imagePath";
import Colors from "../../theme/color";
import Header from "../../navigation/appHeader";
import fonts from "../../theme/fonts";
import styles from "./style";
import { USER_PROPERTY } from "../../Helper/ApiConstant";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Data = [
    {
        id: 1,
        image: imagePath.mainImage,
        title: '31 ward , Pinlon Road , North Dagon',
        subtitle: '4 Bedrooms',
        titleone: '2,301 sqft',
        firstText: '85 Lakhs ',

    },
    {
        id: 2,
        image: imagePath.mainImage,
        title: 'South/North Junction , North Dagon',
        subtitle: '2 Bedrooms',
        titleone: '1131 sqft',
        firstText: '70, 000 ',

    },
    {
        id: 3,
        image: imagePath.mainImage,
        title: 'South/North Junction , North Dagon',
        subtitle: '3 Bedrooms',
        titleone: '1101 sqft',
        firstText: '75, 000 ',

    },

];
const MyPropertyList = (props) => {
    const [isSelectProperty, setIsSelectProperty] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const userID = await AsyncStorage.getItem('USER_ID');
            const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');



            myProPerty(userID, authTokens)
        } catch (error) {
            console.log(error)
        }
    }
    const myProPerty = async (userID, authTokens) => {

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

        fetch(USER_PROPERTY, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {
                    setIsSelectProperty(result?.data)
                } else {
                    alert('no')
                }
            })
            .catch(error => console.log('error', error));
    }

    const renderItem = ({ inedx, item }) => {

        return (
            <View key={inedx}>
                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.navigate('Property_Detail_One', {
                            item_Id: item?.id
                        })
                    }}>
                        <Image style={styles.imageStyle}
                            source={imagePath.mainImage} />
                        <Text style={styles.wardText}>{item.title}</Text>
                        <View style={styles.mainView}>
                            <Image source={imagePath.hotel_bed} style={styles.firstImage} />
                            <Text style={styles.bedText}>
                                {item.bedRooms + " Bedrooms"}
                            </Text>
                            <Image source={imagePath.ruler} style={styles.rulerImageStyle} />
                            <TouchableOpacity activeOpacity={0.6} onPress={() => {
                                props.navigation.navigate('');
                            }}>
                                <Text style={styles.sqftText}>{item.unitName}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.secondView}>
                            <Image source={imagePath.reueya} style={styles.reueyaImage} />
                            <Text style={styles.firstTextStyle}>{item.price}</Text>
                            <Text style={styles.textStyle}>{ }</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const flatList = () => {

        return (
            <FlatList
                data={isSelectProperty}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}

            />
        )
    }

    const leftsideComponent = () => {
        return (

            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.goBack();
                }}>
                    <Image source={imagePath.next} style={styles.nextimageContain} />
                </TouchableOpacity>

            </View>
        )
    }
    const rightsideComponent = () => {
        return (

            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Add_propertyDetail')
                }}>
                    <Image source={imagePath.Group_6} style={styles.rightHeaderContain} />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header
                leftComponent={() => leftsideComponent()}
                rightComponent={() => rightsideComponent()}
                title={" MyPropertyList"}

            />
            {flatList()}

        </View>
    );
}
export default MyPropertyList;
