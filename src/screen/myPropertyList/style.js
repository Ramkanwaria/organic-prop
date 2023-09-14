import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    firstTextStyle: { fontSize: 18, color: '#2B9330', marginRight: 40 },
    textStyle: { fontSize: 18, opacity: 0 },
    rightHeaderContain: { width: 30, height: 30, bottom: 3, left: 5, right: 15, },
    nextimageContain: { bottom: 5, left: 5, right: 5, top: 5 },
    imageStyle: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        marginTop: 5,
        borderRadius: 5,
    },
    likeImage: {
        position: 'absolute',
        marginTop: 35,
        right: 25,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 100,
        padding: 10,
        marginHorizontal: 5
    },
    wardText: {
        fontSize: 17,
        color: '#000000',
        marginHorizontal: 0,
        marginTop: 10
    },
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0,
        marginTop: 5

    },
    firstImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',


    },
    secondImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        left: 5
    },
    bedText: { colo: '#3D405B', fontSize: 12, left: 5 },
    sqftText: { colo: '#3D405B', fontSize: 12, left: 15 },
    rulerImageStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        left: 10
    },
    secondView: {
        flexDirection: 'row', alignItems: 'center', marginTop: 5
    },
    reueyaImage: {
        height: 12,
        width: 10,
        resizeMode: 'contain',
    },
    contactTouch: {
        backgroundColor: '#2b9330',
        borderRadius: 10,
        paddingHorizontal: 25,
        padding: 8,
    },


})
export default styles
