import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary.WHITE,

    },
    hraderStyle: { width: 30, height: 30, bottom: 3, left: 5, right: 15, opacity: 0 },
    renderItem: { backgroundColor: '#9C9C9C', height: 1, marginTop: 5, width: '100%' },
    renderItemStyle: { backgroundColor: '#9C9C9C', height: 1, marginTop: 10, width: '100%' },

    mainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 0,
    },
    imageStyle: { height: 49, width: 49, borderRadius: 30, marginBottom: 15, resizeMode: 'cover' },
    mainText: { color: '#0A0B0B', fontSize: 23, fontWeight: '400', numberOfLines: 1 },
    zizoText: { color: '#3B3B3C', fontSize: 15, fontWeight: '300' },
    arrow_lineStyle: { height: 25, width: 25, },

    View_item: {
        marginHorizontal: 5,
        marginVertical: 1.5,
        backgroundColor: Colors.primary.WHITE,
        // paddingBottom: 30,
        padding: 15,

    },
    title_View: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contain_text: {
        fontSize: 20,
        color: Colors.primary.BLACK,
        flexDirection: 'row',
        fontWeight: '400'

    },
    profile: {
        marginRight: 20,

    },
    backImageStyle: {

    },
    mainImageStyle: {
        height: 126,
        width: 211,
        resizeMode: 'cover',
        borderRadius: 13,
        marginRight: 15,
    },
})
export default styles
// const getInitials = (name) => {
//     const firstName = name?.split(' ')[0];
//     const lastName = name?.split(' ')[1];
//     return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
// };
// let profile = {};
// if (profileData.userName) {
//     profile = {
//         userName: profileData.userName,
//     };
// } else {
// }
// const initials = getInitials(profile.userName);
// const getProfileImage = async () => {
//     const ProfileImg = await AsyncStorage.getItem('ProfileImg');

//     if (ProfileImg) {
//         setFilePath(JSON.parse(ProfileImg));
//     }
// };
//Alert.alert('ProfileImg', typeof JSON.stringify(response))
//AsyncStorage.setItem('ProfileImg', (response));