import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FCFCFC' },
    exploreView: {
        marginTop: 25,
        marginHorizontal: 20
    },
    phoneNumberText: { fontSize: 16, color: Colors.secondary.DARK_BLUE, fontWeight: '400' },
    phoneNumberView: { marginHorizontal: 20, marginTop: 20 },
    verifyView: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B9330',
        borderWidth: 0.5,
        borderColor: '',
        height: 48,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20, marginTop: 40

    },
    textError: { fontSize: 15, color: 'red' },
    exploreText: {
        fontSize: 22,
        color: Colors.secondary.DARK_BLUE,
        fontWeight: '700',
    },
    firstView: {
        marginHorizontal: 20,
        marginTop: 10
    },
    accountText: {
        fontSize: 14,
        color: Colors.secondary.NAV_GYAT,
        fontWeight: '400'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1FEE3',
        borderWidth: 0.5,
        borderColor: '#2B9330',
        height: 48,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20,
    },
    sectionStyleOne: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E7',
        borderWidth: 0.5,
        borderColor: '#F2F2F3',
        height: 48,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 20,
        marginTop: 20
    },
    imageStyle: {
        padding: 8,
        margin: 15,
        height: 13,
        width: 9,
        resizeMode: 'stretch',
        alignItems: 'center',
        //backgroundColor: '#2B9330'
    },
    imageStylePh: {
        padding: 8,
        margin: 15,
        height: 13,
        width: 9,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    profileStyle: {
        padding: 8,
        margin: 15,
        height: 13,
        width: 9,
        resizeMode: 'stretch',
        alignItems: 'center',
        //backgroundColor: '#E1FEE3',
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
    textError: {
        fontSize: 15,
        color: 'red'
    }
})
export default styles