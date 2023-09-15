
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal, FlatList, Alert, ImageBackground } from "react-native";
import imagePath from "../../theme/imagePath";
import AppButton from "../../component/commanButton";
import Header from "../../navigation/appHeader";
import fonts from "../../theme/fonts";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { USER_PROFILE } from "../../Helper/ApiConstant";
import styles from "./style"
import { showErrorMsg, showSuccessMsg, } from "../../Helper/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import MyProfile from "../myProfile";
const Edit_Profile = (props) => {
    let userDetail = props?.route?.params?.userDetail.userName
    let userDetails = props?.route?.params?.userDetail.phoneNumber
    let userEmail = props?.route?.params?.userDetail.email
    let userProfile = props?.route?.params?.userProfile

    let UserProfileImage = props?.route?.params?.UserProfileImage
    let profileImage = props?.route?.params?.userDetail?.profileImage
    const [focus, setFocus] = useState(false);
    const [color, setColor] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [filePath, setFilePath] = useState(userProfile);
    const [name, setName] = useState(userDetail)
    const [email, setEmail] = useState(userEmail)
    const [phonenumber, setPhone] = useState(userDetails)
    const [nameerroe, setNameErroe] = useState('')
    const [emailerroe, setEmailError] = useState('')
    const [phoneerror, setPhoneError] = useState('')
    const [editData, setEditData] = useState([])
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        // getProfileImage()

    }, [])
    const flatListData = [
        {
            id: 1,
            title: 'Camera',
        },
        {
            id: 2,
            title: 'Gellary',
        },

        {
            id: 3,
            title: 'Cancle',
        },
    ];
    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 400,
            quality: 1,
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);
            console.log('Response = ', response);
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            console.log(response.assets[0].uri, '====');

            setFilePath(response);
            console.log(setFilePath);

        });
        setShowModal(!showModal)

    }
    const setProfileImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response?.assets && response?.assets[0]?.uri) {
                //Alert.alert('ProfileImg', typeof JSON.stringify(response))
                //AsyncStorage.setItem('ProfileImg', (response));
                setFilePath(response);
            }
            setShowModal(!showModal);
        });
    };
    const leftsideComponent = () => {
        return (
            <View>
                <TouchableOpacity
                    hitSlop={{}}
                    onPress={() => {
                        props.navigation.goBack()

                    }}>
                    <Image source={imagePath.next} style={styles.backArrow} />
                    <Text />
                </TouchableOpacity>
            </View >
        )
    }

    const onSubmit = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!name) {
            setNameErroe("Enter name");
        }
        else if (!email) {
            setEmailError('Required email');
        }
        else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        }
        else if (!phonenumber) {
            setPhoneError("Enter phone number");
        }
        else if (phonenumber.length != 10) {
            setPhoneError('Please Enter Valid Phone Number');
        }
        else {
            getData()

        }
    }
    const getData = async () => {
        try {
            const userID = await AsyncStorage.getItem('USER_ID');
            const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');
            UserProfile(userID, authTokens)
        } catch (error) {
            console.log(error)
        }
    }

    const UserProfile = (userID, authTokens) => {
        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));
        var formdata = new FormData();
        // formdata.append("File", {
        //     uri: filePath?.assets[0]?.uri,
        //     type: "image/jpg",
        //     name: filePath?.assets[0]?.fileName,

        // });
        formdata.append("UserName", name);
        // formdata.append("Description", "test");
        // formdata.append("EstablishYear", "2023");
        // formdata.append("CompleteProjectCount", "1");
        // formdata.append("City", "1");
        // formdata.append("Locality", "1");
        formdata.append("email", email)
        formdata.append("email", phonenumber)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch(USER_PROFILE, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {
                    showSuccessMsg(result?.message)
                    props.navigation.goBack({

                    })
                }

                else {
                    showErrorMsg(result?.message)
                }
            })
            .catch(error => {
                showErrorMsg(error?.message);
            });
    }

    editPhotoCpmponent = () => {
        const getInitials = (name) => {
            const firstName = name?.split(' ')[0];
            const lastName = name?.split(' ')[1];
            return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
        };

        let profile = {};

        if (props?.route?.params?.userDetail?.userName) {
            profile = {
                userName: props.route.params.userDetail.userName,
            };
            console.log(profile.userName, "=======>DATA2");
        } else {
            profile = {
                userName: 'Default User',
            };
            console.log("userDetail is undefined or does not have a userName property. Using default user name.");
        }

        const initials = getInitials(profile.userName);
        return (
            <View style={styles.mainView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}>
                    <View style={styles.createModel}>
                        <View style={styles.modeView}>
                            <View style={{}}>

                                <FlatList
                                    ItemSeparatorComponent={<View style={styles.underlineStyle}></View>}

                                    data={flatListData}

                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity key={index} onPress={() => {
                                                if (item.id == 1) {
                                                    captureImage('photo')
                                                }
                                                else if (item.id == 2) {
                                                    setProfileImage('photo')
                                                }
                                                else if (item.id == 4) {
                                                    setShowModal(!showModal);
                                                }
                                            }}>
                                                <View style={{}}>
                                                    <Text style={[{
                                                        color: item.id == 4 ? '#909090'
                                                            : item.id == 3 ? 'red'
                                                                : '#2a9df4',
                                                        // color: item.id == 3 ? 'red' : '#2a9df4',
                                                    }, styles.cameraStyle]}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    }}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{}}>
                    <View>
                        <ImageBackground style={styles.userEditStyle}>
                            <View style={styles.userEditStyle} >
                                <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 35 }}>{initials}</Text>
                                <Image source={{ uri: userProfile }} style={{ height: 118, width: 118, borderRadius: 100, bottom: 82 }} />
                            </View>
                        </ImageBackground>
                    </View>
                    {filePath && filePath.assets && filePath.assets[0] && (
                        <Image
                            source={{
                                uri: filePath.assets[0].uri
                            }}
                            style={styles.editImageStyle} />
                    )}
                </View>
                <TouchableOpacity style={styles.editPrifile} activeOpacity={0.8} onPress={() => {
                    setShowModal(!showModal)
                }}>
                    <View>
                        <Image source={imagePath.edit} style={{ height: 20, width: 20, }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const fullNameComponent = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: "#1A1E25", marginTop: 10 }}>Full name</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: focus ? '#E1FEE3' : '#E3E3E7',
                    borderWidth: 0.5,
                    borderColor: focus ? '#1D8348' : '#F2F2F3',
                    height: 48,
                    borderRadius: 40,
                    margin: 10,
                    marginHorizontal: 20,
                }}>
                    <Image
                        source={imagePath.myProfile}
                        style={[styles.imageStyle, { tintColor: focus ? '#1D8348' : '#7D7F88' },]} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Full Name"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#1A1E25"
                        placeholderTextSize={20}
                        keyboardType="default"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        value={name}
                        onChangeText={text => {
                            setName(text)
                            setNameErroe(false)
                        }} />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    {nameerroe ? <Text style={{ fontSize: 15, color: 'red' }}>{nameerroe}</Text> : null}
                </View>
            </View>
        )
    }
    emailComponent = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={styles.emailaddressStyle}>Email address</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color ? '#E1FEE3' : '#E3E3E7',
                    borderWidth: 0.5,
                    borderColor: color ? '#1D8348' : '#F2F2F3',
                    height: 48,
                    borderRadius: 40,
                    margin: 10,
                    marginHorizontal: 20,
                }}>
                    <Image
                        source={imagePath.email}
                        style={[styles.phoneStyle, { tintColor: color ? '#1D8348' : '#7D7F88' },]}
                    // style={styles.imageStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        value={email}
                        onChangeText={error => {
                            setEmail(error)
                            setEmailError(false)
                        }}

                        placeholder="Email"
                        placeholderTextColor={'#1A1E25'}
                        underlineColorAndroid="transparent"
                        keyboardType={Platform.OS == 'ios' ? 'email-address' : 'name-phone-pad'}
                        onFocus={() => setColor(true)}
                        onBlur={() => setColor(false)}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    {emailerroe ? <Text style={{ fontSize: 15, color: 'red' }}>{emailerroe}</Text> : null}
                </View>
            </View>
        )
    }
    const phoneNumberComponent = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: '#1A1E25', marginTop: 10 }}>Phone number</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: phoneNumber ? '#E1FEE3' : '#E3E3E7',
                    borderWidth: 0.5,
                    borderColor: phoneNumber ? '#1D8348' : '#F2F2F3',
                    height: 48,
                    borderRadius: 40,
                    margin: 10,
                    marginHorizontal: 20,
                    marginTop: 10
                }}>
                    <Image source={imagePath.phoneOne}
                        style={[styles.imageStyle, { tintColor: phoneNumber ? '#1D8348' : '#7D7F88' },]}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        value={phonenumber}
                        onChangeText={value => {
                            setPhone(value.replace(/[- #*;,.<>a-z\{\}\[\]\\\/]/gi, ''))
                            setPhoneError(false)
                        }}
                        placeholder="Phone Number"
                        placeholderTextColor={'#1A1E25'}
                        underlineColorAndroid="transparent"
                        keyboardType={Platform.OS == 'ios' ? 'number-pad' : 'phone-pad'}
                        maxLength={10}
                        onFocus={() => setPhoneNumber(true)}
                        onBlur={() => setPhoneNumber(false)}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    {phoneerror ? <Text style={{ fontSize: 15, color: 'red' }}>{phoneerror}</Text> : null}
                </View>
                <AppButton
                    bttName={"Save Profile"}
                    marginTop={160}
                    onPress={() => {
                        onSubmit()
                        UserProfileImage(filePath)
                        //UserProfile()



                    }}
                />
            </View>
        )
    }

    return (
        <View style={StyleSheet.container}>
            <Header
                title={'Edit  Profile'}
                leftComponent={leftsideComponent()}
                rightComponent={""}
            />
            {editPhotoCpmponent()}
            {fullNameComponent()}
            {emailComponent()}
            {phoneNumberComponent()}

        </View>

    );
}



export default Edit_Profile;

