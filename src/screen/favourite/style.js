import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rightContain: { width: 30, height: 30, bottom: 3, left: 5, right: 15, opacity: 0 },
    contactText: { color: '#ffffff', fontSize: 15 },
    lakhaText: { fontSize: 18, opacity: 0 },
    headingStyle: { fontSize: 18, color: '#2B9330', marginRight: 60 },
    imageStyle: {
        width: '100%',
        height: 179,
        resizeMode: 'cover',
        //  marginHorizontal: 5,
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 5
    },
    likeImage: {
        position: 'absolute',
        marginTop: 18,
        right: 10,
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

        marginTop: 10
    },
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0,
        marginTop: 10

    },
    firstImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        right: 1
    },
    secondImage: {
        height: 15,
        width: 18,
        resizeMode: 'contain',
        left: 2

    },
    bedText: { colo: '#3D405B', fontSize: 12, left: 2 },
    sqftText: { colo: '#3D405B', fontSize: 12, left: 2 },
    secondView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

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