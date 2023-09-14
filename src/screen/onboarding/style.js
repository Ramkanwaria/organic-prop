import { Platform, StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC'
    },
    imageStyle: {
        height: 250,
        width: "100%",
        marginTop: 100,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    firstView: {
        marginTop: 120,
    },
    loginText: {
        fontSize: 20,
        color: Colors.secondary.DARK_BLUE,
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 100
    },
    secondText: {
        fontSize: 16,
        color: Colors.secondary.NAV_GYAT,
        textAlign: 'center',
        marginHorizontal: 30
    },
    secondView: {
        marginTop: 50
    },
    // verifyView: {

    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#2B9330',
    //     borderWidth: 0.5,
    //     borderColor: '',
    //     height: 45,
    //     borderRadius: 40,
    //     margin: 10,
    //     marginHorizontal: 30, marginTop: 40

    // },

})
export default styles;