import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40
    },
    equalizerImageView: { width: 48, height: 39, borderColor: '#fff', backgroundColor: '#fff', borderRadius: 10, bottom: 5 },
    downArrowImg: { height: 10, width: 10, left: 12 },
    equlizerImage: { alignSelf: 'center', top: 8, },
    IndoTExt: { fontSize: 18, color: '#fff', },
    surabayaText: { fontSize: 18, color: '#fff' },
    mainHeading: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 9, left: 25, bottom: 10 },
    featureView: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    contactStyle: {
        backgroundColor: '#2b9330',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 30,
        padding: 8,
        marginHorizontal: 3
    },
    firstTitle: {
        fontSize: 20,
        color: Colors.primary.BLACK,
        fontWeight: "500",
    },
    imageStyle: {
        width: '100%',
        height: 179,
        resizeMode: 'cover',
        //  marginHorizontal: 5,
        alignItems: 'center',
        marginTop: 1,
        borderRadius: 5

    },
    titleViewOne: {
        position: 'absolute',
        marginTop: 40,
        right: 20,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 40,
        padding: 10
    },
    titleViewlike: {
        position: 'absolute',
        marginTop: 20,
        right: 20,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 40,
        padding: 10
    },
    likeImageStyle: {
        position: 'absolute',
        marginTop: 30,
        right: 20,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 40,
        padding: 10
    },
    likeImageStyleOne: {
        position: 'absolute',
        marginTop: 30,
        right: 20,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 40,
        padding: 10
    },
    titViewFour: {
        position: 'absolute',
        bottom: 460,
        right: 20,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 100,
        padding: 10
    },
    titViewFive: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 3
    },
    titleViewTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 3
    },
    titViewThree: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 3
    },
    hotel_bedImage: { height: 20, width: 20 },
    bedroomText: { fontSize: 12, marginLeft: 4, color: '#000' },
    rulerImage: { height: 15, width: 15, marginLeft: 4 },
    titleTextOne: { fontSize: 12, marginLeft: 4, color: '#000' },
    rulerImageView: { flexDirection: 'row', alignItems: 'center' },
    reueyaImage: { width: 10, height: 12 },
    TextStyle: { color: '#2B9330', fontSize: 18, marginLeft: 5 },
    contactView: {
        backgroundColor: '#2b9330',
        borderRadius: 10,
        paddingHorizontal: 30,
        padding: 8,
        marginHorizontal: 3
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
        height: 500,
        width: '100%',
    },
    cityListView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        padding: 10
    },
    searchText: {

        justifyContent: 'center',
        color: '#000000',
        fontSize: 20,
        alignItems: 'center',
        marginHorizontal: 100
    },
    View_item: {
        backgroundColor: '#D8D8D8',
        height: 1.5,
        width: '100%',
        borderColor: '#D8D8D8'

    },
    underlineStyle: {
        backgroundColor: '#9C9C9C', height: 1, marginHorizontal: 10, marginTop: 10
    },
    cityListStyle: { color: '#000', fontSize: 15, alignSelf: 'center', justifyContent: 'center', marginTop: 10 }
})
export default styles;