import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import { Platform } from "react-native";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FCFCFC' },
    welcomeView: {
        marginTop: 10
    },
    welcomeText: {
        fontSize: 22,
        color: '#1A1E25',
        marginHorizontal: 20,
        fontWeight: '700'
    },
    loginView: {
        marginTop: 15,
        marginHorizontal: 20,
    },
    loginText: {
        fontSize: 15,
        color: Colors.secondary.NAV_GYAT,
        fontSize: fonts.SIZE_16,
        fontWeight: '400'
    },
    imageStyle: {
        padding: 5,
        margin: 15,
        height: 20,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    imageOutLine: {
        padding: 8,
        margin: 15,
        height: 12,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 70,

    },
    imageGoogle: {
        padding: 10,
        margin: 15,
        height: 24,
        width: 24,
        marginRight: 20
    },
    googleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary.BLACK,
        borderWidth: 0.5,
        height: 50,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20,
        borderColor: "#000000",
        marginTop: 35
    },
    imageIcon: {
        padding: 10,
        margin: 15,
        height: 24,
        width: 24,
        right: 23,
    },
    phoneView: {
        marginTop: 30,
        marginHorizontal: 20
    },
    numberText: {
        fontSize: 16, color: Colors.secondary.DARK_BLUE, fontWeight: '400'
    },
    orView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#E1FEE3',
        height: 30,
        width: 47,
        borderRadius: 24,


    },
    appleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary.WHITE,
        borderWidth: 0.5,
        height: 50,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20,
        borderColor: "#B3B6B7",

    },
    googView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        height: 50,

        margin: 10,
        marginHorizontal: 0,


    },
    accoutnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 120 : 60,
    },
    accountText: {
        fontSize: 18,
        color: Colors.secondary.DARK_BLUE,
        fontWeight: '500',
    },
    signText: {
        fontSize: 18,
        color: '#2B9330',
        fontWeight: '400'

    },
    verifyView: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B9330',
        borderWidth: 0.5,
        borderColor: '',
        height: 50,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20,

    },
})
export default styles;