import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: { flex: 1 },
    maxButtonStyles: {
        height: 40,
        margin: 0,
        width: 170,
        borderWidth: 1,
        padding: 10,
        borderColor: '#2B9330',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    ammenitiesView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 15,
        flexWrap: "wrap"
    },
    ageOfText: { fontSize: 20, color: '#000' },
    propertyTitle: { color: '#6A6A6A', fontSize: fonts.SIZE_18, marginLeft: 10 },
    minButtonStyle: {
        height: 40,
        margin: 12,
        width: 170,
        borderWidth: 1,
        padding: 10,
        borderColor: '#2B9330',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    titleOne: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'

    },
    BalconiesView: { marginHorizontal: 20, marginTop: 10 },
    radio_onView: {
        borderWidth: 1,
        color: '#000000',
        width: 20,
        height: 20,
        borderRadius: 24,
        alignItems: 'center'
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
    bedRoomView: { flexDirection: 'row', marginTop: 10, marginHorizontal: 20 },
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
        marginTop: 20
    },
    ageOfview: { marginHorizontal: 20, marginTop: 10 },
    typeText: {
        color: '#000',
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 10
    },
    typeView: {
        flexDirection: 'row',
        //flexWrap: "wrap",
        // width: 320,

        justifyContent: 'space-between',
        marginHorizontal: 0,
        marginTop: 10,
        marginHorizontal: 12,
        right: 4
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
        flexWrap: "wrap"
    },
})
export default styles