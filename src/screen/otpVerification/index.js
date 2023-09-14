import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, Platform } from "react-native";
import Colors from "../../theme/color";
import imagePath from "../../theme/imagePath";
import AppButton from "../../component/commanButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import showMessage from "react-native-flash-message";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";
import { GENERATE_OTP, OTP_VERIFY } from "../../Helper/ApiConstant";
import Loader from "../../component/Loader";
import fonts from "../../theme/fonts";

const OtpVerification = (props) => {

    const [focus, setFocus] = useState(false)
    const [otp, setOpt] = useState('');
    const [opterroe, setOtpError] = useState('')
    const [loading, setLoading] = useState(false);
    const onSubmit = () => {
        let RegExp = /^\d+$/;
        if (!otp) {
            setOtpError('Enter OTP');
        }
        else if (otp.length != 5) {
            setOtpError("Enter Valid OTP")
        } else if (!RegExp.test(otp)) {
            setOtpError("Enter Only numaric")
        }
        else {
            otpVerify();
        }


    }

    const setData = async (userID, authTokens) => {
        try {
            await AsyncStorage.setItem('isLoggedIn', "true");
            await AsyncStorage.setItem('USER_ID', JSON.stringify(userID));
            await AsyncStorage.setItem('AUTH_TOKEN', JSON.stringify(authTokens));
        } catch (error) {
            console.log(error);
        }
    }

    const otpVerify = () => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw =
            props?.route?.params?.data?.isFrom == "Login"
                ? JSON.stringify({
                    "PhoneNumber": props?.route?.params?.data?.phoneNumber,
                    "OTP": otp
                })
                : JSON.stringify({
                    "PhoneNumber": props?.route?.params?.data?.phoneNumber,
                    "Email": props?.route?.params?.data?.email,
                    "OTP": otp
                });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch(OTP_VERIFY, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    showSuccessMsg('Successfully Login')
                    setData(result?.data?.id, result?.data?.authToken);
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "BottomTab" }],
                    });
                } else {
                    showErrorMsg(result.message)
                }
                setLoading(false)
            })
            .catch(error => {
                showErrorMsg(error.message)
                setLoading(false)
            })
    }

    const resendOTP = () => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "PhoneNumber": props?.route?.params?.data?.phoneNumber,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(GENERATE_OTP, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.status)
                if (result.status) {
                    showSuccessMsg('Your OTP is ' + result.data)
                } else {
                    showErrorMsg(result.message)
                }
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                showErrorMsg(error.message)
            });
    }

    return (
        <>
            <StatusBar
                backgroundColor={'#FCFCFC'}
                barStyle={'dark-content'}
            />

            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.goBack();
                    }}>
                        <Image source={imagePath.outerLine} style={styles.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={styles.otpView}>
                    <Text style={styles.otpText}>OTP verification</Text>
                </View>
                <View style={styles.emailView}>
                    <Text style={styles.emailText}>Please enter the verification code sent on your verified email address</Text>
                </View>
                <View style={styles.titleOne}>
                    <Text style={styles.textTitle}>
                        OTP verification
                    </Text>

                    {/* <View style={{ backgroundColor: 'red' }}>
                        {console.log('-------', phonenumber)}
                        <Text style={{ color: 'green' }}>{phonenumber}</Text>
                    </View> */}
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

                    <TextInput
                        style={{ flex: 1 }}
                        value={otp}
                        onChangeText={text => {
                            setOpt(text.replace())
                            setOtpError(false)
                        }}
                        placeholder="Enter OTP"
                        padding={15}
                        maxLength={5}
                        keyboardType={Platform.OS == 'ios' ? 'number-pad' : 'name-phone-pad'}
                        placeholderTextColor={'#1A1E25'}
                        underlineColorAndroid="transparent"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    {opterroe ? <Text style={{ color: 'red', fontSize: 15 }}>{opterroe}</Text> : null}
                </View>
                <View style={styles.resendView}>
                    <Text style={{ color: '#2B9330', fontSize: 18, opacity: 0 }}>Resend OTP</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        resendOTP()
                    }}>
                        <Text style={{ color: '#2B9330', fontSize: 18, fontWeight: '500' }}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
                <AppButton onPress={() => {
                    // props.navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: "BottomTab" }],
                    // });
                    onSubmit()

                }}
                    bttName={"OTP Verify"}
                />
            </View>
            {loading == true ? <Loader /> : null}
        </>
    );
}
export default OtpVerification;
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FCFCFC'
    },
    resendView: { marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 },
    otpView: {
        marginTop: 20,
        marginHorizontal: 20,

    },
    otpText: {
        fontSize: 22,
        color: Colors.secondary.DARK_BLUE,
        fontWeight: '700'
    },
    emailView: {
        marginTop: 15,
        marginHorizontal: 20
    },
    emailText: {
        color: Colors.secondary.NAV_GYAT,
        fontSize: 16,
        fontWeight: '400'
    },
    TextInputStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1FEE3',
        borderWidth: 0.5,
        borderColor: '#1D8348',
        height: 45,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20,
        padding: 20,


    },
    verifyView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B9330',
        borderWidth: 0.5,
        borderColor: '',
        height: 45,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20
    },
    titleOne: {
        marginHorizontal: 20,
        marginTop: 30
    },
    imageStyle: {
        padding: 8,
        margin: 15,
        height: 12,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'center',
        marginTop: 50,



    },
    textTitle: {
        fontSize: fonts.SIZE_16,
        color: '#1A1E25',
        fontWeight: '400'
    },
})