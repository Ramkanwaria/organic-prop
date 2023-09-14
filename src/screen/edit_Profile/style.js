import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    editPrifile: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6ecf2',
        borderRadius: 20,
        //marginLeft: 20,
        height: 40,
        width: 40,
        bottom: 0,
        top: 70,
        right: 125
    },
    userEditStyle: { height: 118, width: 118, borderRadius: 100, backgroundColor: '#E3E3E7', },
    editImageStyle: { width: 118, height: 118, borderRadius: 60, position: 'absolute', left: 0 },
    mainView: {
        marginTop: 30, justifyContent: 'center',
        alignItems: 'center'
    },
    emailaddressStyle: { fontSize: 15, color: Colors.secondary.DARK_BLUE, fontWeight: '400' },
    // console.log(images[0]?.fileName, '<-----------Hello');
    // setImages(images.fileName.filter((value) => value == 0))
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E7',
        borderWidth: 0.5,
        borderColor: '#F2F2F3',
        height: 48,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 30,
    },
    imageStyle: {
        padding: 10,
        margin: 15,
        height: 22,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'center',
        // backgroundColor: '#F2F2F3',
    },
    phoneStyle: {
        padding: 10,
        margin: 15,
        height: 20,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'center',
        // backgroundColor: '#F2F2F3',
    },
    verifyView: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B9330',
        borderColor: '#2b9330',
        borderWidth: 0.5,
        borderColor: '',
        height: 45,
        borderRadius: 40,
        margin: 10,
        marginHorizontal: 30, marginTop: 40

    },
    createModel: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000aa'
    },
    modeView: {
        height: 200,
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center'
    },
    cameraStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,

    },
    underlineStyle: {
        backgroundColor: '#9C9C9C', height: 1, marginHorizontal: 10, marginTop: 10
    }
});
export default styles;