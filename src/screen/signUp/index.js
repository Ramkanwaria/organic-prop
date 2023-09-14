import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, Platform, Button } from "react-native";
import Colors from "../../theme/color";
import imagePath from "../../theme/imagePath";
import AppButton from "../../component/commanButton";
import showMessage from "react-native-flash-message";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";
import { SIGNUP } from "../../Helper/ApiConstant";
import Loader from "../../component/Loader";
import styles from './style'
const SignUp = (props) => {
    const [focus, setFocus] = useState(false)
    const [color, setColor] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhone] = useState('')
    const [nameerroe, setNameErroe] = useState('')
    const [emailerroe, setEmailError] = useState('')
    const [phoneerror, setPhoneError] = useState('')
    const [loading, setLoading] = useState(false);

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
            setPhoneError("enter phone number");
        }
        else if (phonenumber.length != 10) {
            setPhoneError('Please Enter Valid Phone Number');
        }
        else {
            // props.navigation.navigate("OtpVerification")
            SignUpApi()
        }
    }

    const SignUpApi = () => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "PhoneNumber": phonenumber,
            "Email": email,
            "UserName": name,
            "UserType": "1"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let data = {
            "isFrom": "SignUp",
            "phoneNumber": phonenumber,
            "email": email
        }

        fetch(SIGNUP, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result, '==========11')
                if (result?.status) {
                    showSuccessMsg(result.message)
                    props.navigation.navigate('OtpVerification', { data: data })
                }
                else {
                    showErrorMsg(result.message);
                }
                setLoading(false)
            })
            .catch(error => {
                // console.log('error ====', error)
                setLoading(false);
                showErrorMsg(error.message);
            });
    }

    const mainHeading = () => {
        return (
            <View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.goBack();
                    }}>
                        <Image source={imagePath.outerLine} style={styles.imageOutLine} />
                    </TouchableOpacity>
                </View>
                <View style={styles.exploreView}>
                    <Text style={styles.exploreText}>Let's explore together!</Text>
                </View>
                <View style={styles.firstView}>
                    <Text style={styles.accountText}>
                        Create your placoo account to explore your dream place to live across the whole world!
                    </Text>
                </View>
            </View>
        )
    }
    const fullname = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <View style={styles.phoneNumberView}>
                    <Text style={styles.phoneNumberText}>Fullname</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: focus ? '#E1FEE3' : '#E3E3E7',
                    borderWidth: 0.5,
                    borderColor: focus ? '#1D8348' : '#F2F2F3',
                    height: 50,
                    borderRadius: 40,
                    margin: 10,
                    marginHorizontal: 20,
                }}>
                    <Image source={imagePath.myProfile}
                        style={[styles.profileStyle, { tintColor: focus ? '#1D8348' : '#7D7F88' },]}
                    // style={styles.profileStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        value={name}
                        onChangeText={error => {
                            setName(error)
                            setNameErroe(false)
                        }}


                        placeholder="FullName"
                        placeholderTextColor={'#1A1E25'}
                        underlineColorAndroid="transparent"

                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>

                    {nameerroe ? <Text style={styles.textError}>{nameerroe}</Text> : null}
                </View>
            </View>
        )
    }
    const emailAddress = () => {
        return (
            <View>
                <View style={styles.phoneNumberView}>
                    <Text style={styles.phoneNumberText}>Email address</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color ? '#E1FEE3' : '#E3E3E7',
                    borderWidth: 0.5,
                    borderColor: color ? '#1D8348' : '#F2F2F3',
                    height: 50,
                    borderRadius: 40,
                    margin: 10,
                    marginHorizontal: 20,
                }}>
                    <Image
                        source={imagePath.email}
                        style={[styles.imageStyle, { tintColor: color ? '#1D8348' : '#7D7F88' },]}
                    // style={styles.imageStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        value={email}
                        onChangeText={text => {
                            setEmail(text)
                            setEmailError(false)
                        }}
                        placeholder="EmailAddress"
                        placeholderTextColor={'#1A1E25'}
                        underlineColorAndroid="transparent"
                        keyboardType={Platform.OS == 'ios' ? 'email-address' : 'name-phone-pad'}
                        onFocus={() => setColor(true)}
                        onBlur={() => setColor(false)}
                    />
                </View>

                <View style={{ marginHorizontal: 20 }}>
                    {emailerroe ? <Text style={styles.textError}>{emailerroe}</Text> : null}
                </View>
            </View>
        )
    }
    const PhoneNo = () => {
        return (
            <View>
                <View style={styles.phoneNumberView}>
                    <Text style={styles.phoneNumberText}>Phone number</Text>
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
                        maxLength={10}
                        placeholder="Phone Number"
                        placeholderTextColor={'#1A1E25'}
                        underlineColorAndroid="transparent"
                        keyboardType={Platform.OS == 'ios' ? 'number-pad' : 'phone-pad'}
                        onFocus={() => setPhoneNumber(true)}
                        onBlur={() => setPhoneNumber(false)}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    {phoneerror ? <Text style={styles.textError}>{phoneerror}</Text> : null}
                </View>
                <AppButton
                    marginTop={60}
                    bttName="Create Account"
                    onPress={() => {
                        onSubmit()
                        //alert(nameerroe)
                    }}
                />
            </View>
        )
    }


    return (

        <>

            <StatusBar
                backgroundColor={'#FCFCFC'}
                barStyle={'dark-content'}
            />
            <View style={styles.container}>
                {mainHeading()}
                {fullname()}
                {emailAddress()}
                {PhoneNo()}

                {loading == true ? <Loader /> : null}
            </View>
        </>
    );
}
export default SignUp
