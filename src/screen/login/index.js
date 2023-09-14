import React, { useState, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, Platform, } from "react-native";
import imagePath from "../../theme/imagePath";
import AppButton from "../../component/commanButton";
import { showMessage } from "react-native-flash-message";
import styles from "./style";
import Loader from "../../component/Loader";
import { showErrorMsg, showSuccessMsg } from "../../Helper/Constants";
import { LOGIN } from "../../Helper/ApiConstant";


const Login = (props) => {
    const [focus, setFocus] = useState(false);
    const [phonenumber, setPhoneNo] = useState('')
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        if (!phonenumber) {
            setError("Enter phone number");
        }
        else if (phonenumber.length != 10) {
            setError('Please Enter Valid Phone Number', 'phone');
        }
        else {
            LoginAPI()
        }
    }

    const LoginAPI = () => {
        setLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "PhoneNumber": phonenumber,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let data = {
            "isFrom": "Login",
            "phoneNumber": phonenumber
        }

        fetch(LOGIN, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {
                    showSuccessMsg('Your OTP is ' + result.data)
                    props.navigation.navigate('OtpVerification', { data: data })
                }
                else {
                    showErrorMsg(result.message);
                }
                setLoading(false)
            })
            .catch(error => {
                setLoading(false);
                showErrorMsg(error.message);
            });
    }

    const phoneNumber = () => {
        return (
            <View>

                <View>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <View style={{ marginBottom: 10 }}>

                            <Image source={imagePath.outerLine} resizeMode="contain" style={styles.imageOutLine} />

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.welcomeView}>
                    <Text style={styles.welcomeText}>
                        Welcome Back!
                    </Text>
                </View>
                <View style={styles.loginView}>
                    <Text style={styles.loginText}>
                        Login In to your account to explore your dream{"\n"}
                        please to live accross the whole world!
                    </Text>
                </View>
                <View style={styles.phoneView}>
                    <Text style={styles.numberText}>Phone number</Text>
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
                    <Image
                        source={imagePath.telephone}
                        style={[styles.imageStyle, { tintColor: focus ? '#1D8348' : '#7D7F88' },]} />
                    <TextInput

                        value={phonenumber}
                        onChangeText={value => {
                            setPhoneNo(value.replace(/[- #*;,.<>a-z\{\}\[\]\\\/]/gi, ''))
                            setError(false)

                        }}
                        maxLength={10}
                        style={{ flex: 1 }}
                        placeholder="Phone Number"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#1A1E25"
                        placeholderTextSize={20}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}

                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}

                    />

                </View>
                <View style={{ marginHorizontal: 30 }}>

                    {error ?
                        <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
                        : null}{

                    }
                </View>


                <AppButton
                    bttName={"Log In"}
                    onPress={() => { onSubmit() }
                    }
                />



                <View style={styles.orView}>
                    <View style={{ backgroundColor: '#EBE8F6', height: 1.5, width: 345, }}>
                        <Text style={{
                            color: '#0C7812',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            bottom: -7,
                            position: 'absolute', fontSize: 12,
                            fontWeight: '600'
                        }}>OR</Text>

                    </View>
                </View>

            </View>
        )
    }

    const AppleSingIn = () => {
        return (
            <View>
                <View>

                    <View style={[{ justifyContent: 'space-between' }]}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.googleView}>
                            <Image
                                source={imagePath.Apple_Icom}
                                style={styles.imageIcon}
                            />

                            <Image
                                source={imagePath.Apple_Icom}
                                style={[styles.imageIcon, { opacity: 0 }]}
                            />

                            <Text style={{ color: '#fff', right: 25, fontSize: 18, fontWeight: '500', }}>Sign in with Apple</Text>
                            <Image
                                source={imagePath.Apple_Icom}
                                style={[styles.imageIcon, { opacity: 0 }]}
                            />

                        </TouchableOpacity>




                    </View>

                </View>
                <TouchableOpacity activeOpacity={0.8} style={{}}>
                    <View style={[styles.appleView, { justifyContent: 'space-between' }]}>
                        <Image
                            source={imagePath.GoogleIcon}
                            style={styles.imageGoogle}
                        />
                        <Text style={{ color: '#475569', right: 2, fontSize: 18, fontWeight: '500' }}>Sign in with Google</Text>
                        <Image
                            source={imagePath.google}
                            style={[styles.imageGoogle, { opacity: 0 }]}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.accoutnView}>
                    <Text style={styles.accountText}>Don’t have an account ?</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.navigate('SignUp');
                    }}
                    >
                        <Text style={styles.signText}> SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (

        <>
            <StatusBar translucent
                backgroundColor={'#FCFCFC'}
                barStyle={"dark-content"} />

            <View style={styles.container}>

                {phoneNumber()}
                {AppleSingIn()}

                {loading == true ? <Loader /> : null}
            </View>

        </>
    );
}
export default Login;

