import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    renderItemStyle: {

        marginHorizontal: 10,
        marginVertical: 2,
        backgroundColor: '#fff',
        // paddingBottom: 30,
        padding: 15,
        borderRadius: 10,
        shadowOffset: {
            height: 5,
            width: 5,
        },

    },
    imageStyle: {
        marginTop: 0,
        // height: 230,
        // width: 330
    },
    mainView: { flexDirection: 'row', justifyContent: 'space-between' },
    timeTextStyle: { fontSize: 10, color: '#040404', },
    rightHeaderStyle: { width: 30, height: 30, bottom: 3, left: 5, right: 15, opacity: 0 },
})
export default styles