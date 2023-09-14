import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Switch, ImageBackground, ScrollView } from "react-native";

import { useIsFocused } from '@react-navigation/native';
import imagePath from "../../theme/imagePath";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../navigation/appHeader";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Avatar from 'react-avatar';
import {
    AGENT_LIST,
    BUY_RENT_PROPERTY_COUNT,
    DEVICEDETAIL,
    ENABLENOTIFICATION,
    FEATURED_PROJECT, FEATURED_PROPERTY, NOTIFICATION, PROJECT_DERAIL,
    USER_DETAILS
} from "../../Helper/ApiConstant";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";

const Data = [
    {
        id: 1,
        image1: imagePath.notification,
        mainText: 'Notification',
    },
    {
        id: 2,
        image1: imagePath.h,
        mainText: 'Help & Support',
    },
    {
        id: 3,
        image1: imagePath.lock,
        mainText: 'Privacy Policy',
    },
    {
        id: 4,
        image1: imagePath.terms_conditions,
        mainText: 'Terms & Conditions ',
    },
    {
        id: 5,
        image1: imagePath.logout,
        mainText: 'Logout',

    },
    {
        id: 6,
        image1: '',
        mainText: 'FeaturedProject',
    },
    {
        id: 7,
        image1: '',
        mainText: 'featuredProperty',
    },
    {
        id: 8,
        image1: '',
        mainText: 'AgentList',
    },
    {
        id: 9,
        image1: '',
        mainText: 'BuyRentPropertyCount',
    },
    {
        id: 10,
        image1: '',
        mainText: 'project detail',
    },
    {
        id: 11,
        image1: '',
        mainText: 'EnableNotification'

    },
    {
        id: 12,
        image1: '',
        mainText: 'DeviceDetail',
    },
    {
        id: 13,
        image1: '',
        mainText: 'Notification1',
    },
];





const MyProfile = (props) => {
    const [profileData, setProfileData] = useState([]);
    const [like, setLike] = useState(false)
    const isFocused = useIsFocused();
    const [imageUri, setImageUri] = useState("");
    useEffect(() => {
        if (isFocused) {
            UserDetails()
            FeaturedProjectApi('Ahmedabad', 'gota',)
            featuredPropertyApi('Ahmedabad', 'gota',)
            AgentList(153, 'gota')
            BuyRentPropertyCount(1)
            ProjectDetail(1)

        }
    }, [isFocused])

    const setData = async () => {
        try {
            await AsyncStorage.setItem('isLoggedIn', "false");

        } catch (error) {
            console.log(error);
        }
    }




    const UserDetails = async () => {

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

        fetch(USER_DETAILS, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {

                    setProfileData(result?.data)
                } else {
                    showErrorMsg(message)
                    alert(message)
                }
            })
            .catch(error => {
                showErrorMsg(error.message)
            });
    }

    const FeaturedProjectApi = (city, landMark) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(FEATURED_PROPERTY + `?City=${city}&LandMark=${landMark}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    // gobackData.log(result.data, '<=====DATA')
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    const featuredPropertyApi = (city, landMark) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(FEATURED_PROJECT + `?City=${city}&LandMark=${landMark}`, requestOptions, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    // console.log(result?.data[0])
                    // showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => {
                showErrorMsg(error.message)
                //  console.log(error.message)
            });
    }

    const AgentList = (cityId, landMark) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            //  body: raw,
            redirect: 'follow'
        };

        fetch(AGENT_LIST + `?CityId=${cityId}&LandMark=${landMark}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    // console.log(result?.data[0])
                    // showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => {
                console.log(error, 'error')
                showErrorMsg(error.message)
            });
    }

    const BuyRentPropertyCount = (buyId) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(BUY_RENT_PROPERTY_COUNT + `?BuyId=${buyId}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    //console.log(result?.data, 'data')
                    // showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    const ProjectDetail = (Id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(PROJECT_DERAIL + `?Id=${Id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    //console.log(result?.data, 'data')
                    // showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    const NotificationApi = async () => {
        const userID = await AsyncStorage.getItem('USER_ID');
        const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');


        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(NOTIFICATION, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {

                    // showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    const EnableNotificationApi = async () => {
        const userID = await AsyncStorage.getItem('USER_ID');
        const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');



        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Push_Token": authTokens,
            "DeviceType": "Iphone",
            "DeviceInfo": "1234567",
            "EnableDisable": "false",
            "UserId": userID
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(ENABLENOTIFICATION, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {

                    // showSuccessMsg(result.message)
                } else {
                    showErrorMsg(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    const DeviceDetail = async () => {
        const userID = await AsyncStorage.getItem('USER_ID');
        const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');



        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Push_Token": authTokens,
            "DeviceType": "Iphone",
            "DeviceInfo": "1234567",
            "UserId": userID
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(DEVICEDETAIL, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {

                    //showSuccessMsg(result.status)
                } else {
                    showErrorMsg()
                }
            })
            .catch(error => console.log('error', error));
    }


    const renderItem = ({ inedx, item }) => {

        return (
            <TouchableOpacity key={inedx} style={styles.View_item}
                onPress={() => {
                    if (item.id == 1) {
                        NotificationApi()
                    }

                    else if (item.id == 5) {
                        setData()
                        props.navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }]
                        })
                    } else if (item.id == 6) {
                        FeaturedProjectApi()
                    } else if (item.id == 7) {
                        FeaturedProjectApi()
                    } else if (item.id == 8) {
                        AgentList()
                    } else if (item.id == 9) {
                        BuyRentPropertyCount()
                    }
                    else if (item.id == 10) {
                        ProjectDetail()
                    }
                    else if (item.id == 11) {
                    }
                    else if (item.id == 12) {
                        DeviceDetail()
                    }
                }} >
                <View style={styles.title_View}>

                    <Image style={styles.profile}
                        source={item.image1} />
                    <Text style={styles.contain_text}>{item.mainText}

                        {item.id == 1 ? (
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => {
                                    setLike(!like);
                                }}>
                                <Switch style={{ marginLeft: 150, }}
                                    trackColor={{ false: '#E3E3E7', true: '#2B9330' }}
                                    thumbColor={like ? '#E3E3E7' : '#2b9330'}
                                    borderColor={like ? '#2b9330' : '#E3E3E7'}
                                    ios_backgroundColor="#E3E3E7"
                                    android_backgroundColor=""
                                    onValueChange={setLike}
                                    value={like} />
                            </TouchableOpacity>
                        ) : null}
                    </Text>
                </View>
            </TouchableOpacity>

        );
    }


    const goBackImage = async (i) => {



        if (i && i.assets) {
            setImageUri(i?.assets[0]?.uri);
        } else {
            setImageUri(i);
        }

    };
    const UserTab = () => {
        const getInitials = (name) => {
            const firstName = name?.split(' ')[0];
            const lastName = name?.split(' ')[1];
            return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
        };
        let profile = {};
        if (profileData.userName) {
            profile = {
                userName: profileData.userName,
            };
        } else {
        }
        const initials = getInitials(profile.userName);
        return (

            <View style={{ marginTop: 20, marginHorizontal: 30, }}>
                <TouchableOpacity style={styles.mainView} onPress={() => {
                    props.navigation.navigate('Edit_Profile', {
                        userDetail: profileData,
                        UserProfileImage: goBackImage,
                        userProfile: imageUri
                    });
                }}>

                    <View>
                        <ImageBackground style={{ height: 49, width: 49, borderRadius: 100, backgroundColor: '#E3E3E7', }}

                        >
                            <View style={styles.userEditStyle} >
                                {imageUri && (
                                    <Image source={{ uri: imageUri }} style={styles.imageStyle} />
                                )}
                                <Text style={{ fontSize: 10, color: 'blue', justifyContent: 'center', alignSelf: 'center', marginTop: 17 }}>{initials}</Text>

                            </View>


                        </ImageBackground>


                    </View>
                    <View style={{ marginRight: 160, marginHorizontal: 30, }}>
                        <Text numberOfLines={1} style={styles.mainText}>
                            {profileData.userName}
                        </Text>
                        <Text style={styles.zizoText}>{profileData.email}</Text>
                    </View>
                    <Image source={imagePath.arrow_line} style={styles.arrow_lineStyle} />

                </TouchableOpacity>
                <View style={styles.renderItemStyle}></View>
            </View>
        );
    };
    const renderItemSeperator = () => {
        return (
            <View style={styles.renderItem}>

            </View>
        )
    }
    const flatList = () => {
        return (
            <FlatList
                ItemSeparatorComponent={renderItemSeperator}
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        )
    }
    const rightSideComponent = () => {
        return (
            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Add_propertyDetail')
                }}>
                    <Image source={imagePath.Group_6} style={styles.hraderStyle} />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header style={{}}
                title={'My Profile'}
                rightComponent={() => rightSideComponent()}
            />
            <ScrollView>
                {UserTab()}
                {flatList()}
            </ScrollView>

        </View>
    );
}
export default MyProfile;
