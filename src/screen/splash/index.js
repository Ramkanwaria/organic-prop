
import React, { useEffect } from 'react';
import {

    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
const Splash = (props) => {

    // useEffect(() => {

    //     setTimeout(() => {
    //         SplashScreen.hide();
    //         props.navigation.navigate('Onboading')
    //     }, 1500);


    // }, []);


    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', backgroundColor: '#ff99', borderWidth: 1, borderColor: '#aa33' }}>
                <TouchableOpacity><Text>App Click</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});