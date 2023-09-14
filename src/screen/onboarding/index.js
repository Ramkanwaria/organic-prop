import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import Colors from "../../theme/color";
import imagePath from "../../theme/imagePath";
import AppButton from "../../component/commanButton";
import styles from "./style"
import AsyncStorage from "@react-native-async-storage/async-storage";
const Onboading = (props) => {
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        try {
            AsyncStorage.getItem('isLoggedIn')
                .then(value => {

                    alert(value)

                })
        } catch (error) {
            console.log(error)
        }
    }
    const userScreen = () => {
        return (
            <View style={styles.container}>
                <>
                    <View style={{}}>
                        <Image source={imagePath.Frame4x} resizeMode="contain"
                            style={styles.imageStyle}
                        />
                        <View style={styles.firstView}>
                            <Text style={styles.loginText}>
                                Please  first login to use
                                all functionality
                            </Text>
                        </View>
                        <View style={styles.secondView}>
                            <Text style={styles.secondText}>
                                Are you ready to uproot and start over in a new area?
                                This app will help you on your journey!
                            </Text>
                        </View>
                        <AppButton bttName='Log in'
                            marginTop={80}
                            onPress={() => {
                                props.navigation.navigate('Login');
                            }}

                        />

                    </View>
                </>

            </View>
        )
    }
    return (
        <>
            <StatusBar translucent
                backgroundColor={'#FCFCFC'}
                barStyle={"dark-content"}
            />

            {userScreen()}

        </>
    );
}
export default Onboading;
