import { Platform, StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    itemImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    itemContent: {
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: 'red',

    },
    itemContentOne: {
        marginHorizontal: 10,
        alignItems: 'center',

    },
    imageStyle: {
        width: 211,
        height: 126,
        borderRadius: 13,
        resizeMode: 'cover',
    },
    forSellView: {
        position: 'absolute',
        marginTop: 80,
        left: 10,
        fontSize: 30,
    },
    forSellText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "500",
    },
    propertiesText: {
        color: '#fff',
        fontSize: fonts.SIZE_13,
        fontWeight: "400",
    },
    trendingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 5
    },
    buyText: { marginRight: 100, color: '#79B47C', fontSize: 15, marginLeft: 3 },
    styleImg: { height: 17, width: 10, marginRight: 20 },
    secondList: {
        width: 165,
        height: 138,
        borderRadius: 15,
        resizeMode: "contain",

    },
    wardStyle: { marginTop: 10, marginHorizontal: 0 },
    waedText: { fontSize: 14, color: '#000' },
    LakhaStyle: { color: '#2B9330', fontSize: 18, opacity: 0 },
    reueyaImage: { width: 10, height: 12, },
    mainViewStyle: { flexDirection: 'row', alignItems: 'center', marginRight: 10, },
    lakhaText: { color: '#2B9330', fontSize: 18, marginLeft: 10 },
    sqltText: { color: '#3D405B', fontSize: 11, marginRight: 5 },
    rulerImageStyles: {
        height: 18, width: 18, bottom: 3,
        marginRight: 5
    },
    BedroomsTextStyles: { color: '#3D405B', fontSize: 11, marginRight: 10 },
    BedroomsTextStyles: {
        height: 18, width: 18, bottom: 3,
        marginRight: 0
    },
    firstViewStyle: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 5, },
    secondViewStyle: { flexDirection: 'row', justifyContent: 'space-between' },
    imageHotelStyle: { height: 18, width: 18, bottom: 3, marginRight: 5 },
    contactTouch: {
        backgroundColor: '#2b9330',
        borderRadius: 5,
        paddingHorizontal: 22,
        padding: 5, height: 25,
        width: Platform.OS === 'ios' ? 158 : 165,
        alignItems: "center"
    },
    propertyImageStyle: {
        height: 126,
        width: 211,
        resizeMode: 'cover',
        borderRadius: 13,
        marginRight: 15,
    },
    backImageStyle: {
        height: 126,
        width: 211,
        resizeMode: 'cover',
        borderRadius: 13,
        marginRight: 15,
    },
    mainImageStyle: {
        height: 126,
        width: 211,
        resizeMode: 'cover',
        borderRadius: 13,
        marginRight: 15,
    },
    backGroundImageStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        height: 126,
        width: 211,
        resizeMode: 'cover',
        borderRadius: 13,
        marginRight: 15,

    },
    placeHolderImageStyle: {
        height: 33, width: 33,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 30,
        padding: 8,
        alignItems: 'center',
        //alignSelf: 'center',
        position: 'absolute',
        right: 10,
        top: 20

    },
    likeImage: {
        position: 'absolute',
        height: 30,
        width: 30,
        marginTop: 0,
        left: 1,
        bottom: 10,
        fontSize: 30,
        backgroundColor: '#0C7812',
        borderColor: '#0C7812',
        borderRadius: 100,
        padding: 10,
        marginHorizontal: 5
    },
    centered_View: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000aa',

    },
    modal_View: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 350,
        width: '100%',

    },
    cityListView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        padding: 10, marginTop: 5,

    },
    searchText: {

        justifyContent: 'center',
        color: '#000000',
        fontSize: 20,
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight: '500',

    },
    View_item: {
        backgroundColor: '#D8D8D8',
        height: 1.5,
        width: '100%',
        borderColor: '#D8D8D8', marginTop: 5

    },
    underlineStyle: {
        backgroundColor: '#9C9C9C', height: 1, marginHorizontal: 10, marginTop: 10,
    },
    cityListStyle: { color: '#000', fontSize: 15, alignSelf: 'center', justifyContent: 'center', marginTop: 10 }
})
export default styles