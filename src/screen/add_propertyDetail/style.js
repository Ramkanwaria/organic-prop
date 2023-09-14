import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: { flex: 1, showsHorizontalScrollIndicator: false },
    titleOne: {


    },
    headingOne: {
        backgroundColor: '#D1D5DB', height: 2, width: 142,
        borderWidth: 1, borderColor: '#D1D5DB', marginLeft: 165, top: 8
    },
    rightHeader: {
        width: 30,
        height: 30,
        bottom: 3,
        left: 5,
        right: 15,
        opacity: 0
    }, dropdownOne: {
        marginHorizontal: 75,
        width: 178,
        right: 74,
        borderColor: '#BCBCBC',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff', paddingVertical: 1.5,

    },
    dropdownViewOne: {
        height: 41,
        margin: 12,
        width: 175,
        borderWidth: 1,
        padding: 10,
        borderColor: '#BCBCBC',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',

    },
    dropdownViewTwo: {
        height: 41,
        margin: 12,
        width: 175,
        borderWidth: 1,
        padding: 10,
        borderColor: '#BCBCBC',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',

    },
    dropdownTwo: {
        marginHorizontal: 75,
        width: 178,
        right: 74,
        borderColor: '#BCBCBC',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingVertical: 1.5,

    },
    maiaDropDownView: {
        height: 41,
        margin: 12,
        width: 175,
        borderWidth: 1,
        padding: 10,
        borderColor: '#BCBCBC',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',

    },
    dropdownView: {
        marginHorizontal: 75,
        width: 178,
        right: 74,
        borderColor: '#BCBCBC',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingVertical: 1.5,

    },
    imageHeader: { position: 'absolute', right: 5, top: 5 },
    imageStyle: { height: 149, width: 160, borderRadius: 14 },
    cancleButtonStyle: { height: 20, width: 20, tintColor: 'red' },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 2,
        width: 40,
        height: 40,
        flexDirection: 'row',
        marginHorizontal: 30,
        padding: 10,
        margin: 8,
        paddingHorizontal: 13,
        borderRadius: 10,
        // borderColor: '#E1FEE3',
        borderWidth: 1,
    },
    furnishTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 10,
        flexWrap: "wrap"
    },
    balconiesView:
    {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
    },
    balconies: {
        marginHorizontal: 20,
        marginTop: 15
    },
    textHeading: {
        color: '#6A6A6A',
        fontSize: fonts.SIZE_18,
        marginLeft: 10
    },
    NumberBedroom: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 15
    },
    radio_onView: {
        borderWidth: 1,
        borderColor: '#9CA3AF',
        width: 20,
        height: 20,
        borderRadius: 24,
        alignItems: 'center',

    },

    titlethree: {
        flexDirection: 'row',
        flexWrap: "wrap",
        // width: 320,
        marginRight: 30,
        // justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        height: 30, width: 60, borderRadius: 5, backgroundColor: '#E1FEE3'

    },
    titlefour: {
        backgroundColor: '#E1FEE3',
        //padding: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#E1FEE3',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    propertyView: {
        color: '#000', fontSize: 20,
        marginHorizontal: 20
    },
    sellView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10

    },
    typeText: {
        color: '#000',
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 15
    },
    typeView: {

        flexDirection: 'row',
        flexWrap: "wrap",
        // width: 320,
        marginRight: 10,
        // justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 10
    },
    titleText: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 5
    },
    textOne: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 10
    },
    bedroomsView: { marginTop: 10, marginHorizontal: 20 },
    avaibilityView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        flexWrap: "wrap"
    },
    ageofView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        flexWrap: "wrap",
    },
    areaView: {
        marginHorizontal: 15,

    },
    areaText: {
        fontSize: 18,
        color: '#000'
    },
    carpetView: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    carpetText: {
        color: '#373737',
        fontSize: fonts.SIZE_18,
    },
    enterView: {

    },
    enterViewOne: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        paddingHorizontal: 68,
        paddingVertical: 10,
        marginHorizontal: 0,
        borderRadius: 5,
        borderColor: '#BCBCBC',
        borderWidth: 1,
    },
    enterViewtwo: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        paddingHorizontal: 45,
        paddingVertical: 10,
        //marginHorizontal: 40,
        borderRadius: 5,
        borderColor: '#BCBCBC',
        borderWidth: 1,
    },
    enterText: {
        fontSize: 18,
        color: '#6A6A6A',
        right: 20
    },
    builtView: { marginHorizontal: 15, marginTop: 10 },
    builtText: { fontSize: 18, color: '#373737' },
    superView: { marginHorizontal: 15, marginTop: 10 },
    superText: { fontSize: 18, color: '#373737' },
    selectText: { fontSize: 18, color: '#6A6A6A', right: 30 },
    sqText: { fontSize: 18, color: '#6A6A6A', right: 55 },
    cityView: { marginHorizontal: 15, marginBottom: 20 },
    cityText: { color: '#000000', fontSize: 20, marginBottom: 20 },

    appartmentText: { color: '#000', fontSize: 18, marginBottom: 30, marginHorizontal: 20 },
    entervalueMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    entervalueView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 0,
        alignItems: 'center',
        marginTop: 10,


    },
    expectedView: {
        marginHorizontal: 19,
        bottom: 30,
        marginTop: 40
    },
    expectedText: {
        color: '#000000',
        fontSize: 18,
    },
    priceView: {
        marginHorizontal: 19,
        bottom: 30
    }, item: {
        marginLeft: 30,
        bottom: 20
    },
    uploadView: {
        marginHorizontal: 20,
        marginTop: 10,
        bottom: 10
    },
    uploadText: {
        color: '#000000',
        fontSize: 18,
        bottom: 20
    },
    descriptionView: {
        marginHorizontal: 19,
        marginTop: 5
    },
    descriptionText: {
        colorL: '#000000',
        fontSize: 18,
        bottom: 12,

    },
    imageUpload: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        bottom: 10

    },
    oneImage: { position: 'absolute', zIndex: 999 },
    border_Image: { position: 'absolute', zIndex: 999, },

    dropdown: {

        marginTop: 0,
    },
    icon: {
        marginRight: 5,
        width: 14,
        height: 8,
    },
    iconOne: {
        marginRight: 5,
        width: 14,
        height: 8,
    },
    iconTwo: {
        marginRight: 5,
        width: 14,
        height: 8,
    },
    item: {
        marginLeft: 40,
        bottom: 24
    },
    textItem: {
        // flex: 1
    },
    titleText: {
        fontSize: 22,
        fontWeight: "500",
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
    },

    imageStyle: {
        // width: 160,
        // height: 140,
        // margin: 5,
        borderRadius: 14
    },
    centered_View: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000aa',
    },
    modal_View: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: 200,
        width: '100%',
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
    cameraStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 25,

    },
    underlineStyle: {
        backgroundColor: '#9C9C9C', height: 1, marginHorizontal: 10, marginTop: 10
    }


})
export default styles