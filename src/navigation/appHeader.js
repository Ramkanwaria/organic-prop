// Global Imports
import React from 'react'
import {
    View, StyleSheet, Pressable, Image, TouchableOpacity,
    Platform,
    Dimensions
} from 'react-native'
import { Header as HeaderRNE } from '@rneui/themed';

// File Imports
import COLORS from '../theme/color'
import { statusBarBg, statusBarStyle } from '../../App';
import Colors from '../theme/color';
import fonts from '../theme/fonts';
import imagePath from '../theme/imagePath';
const Header = ({
    nav, title, leftComponent, leftComponentStyles,
    rightComponent, righComponentStyles,
    leftBtnOnPress, barStyle, statusBarProps,
    centerComponent, placement, titleStyle, diffHeaderContainer,
    backImgStyle, tabBar, notification, colorTitle,
    home, backButtonContainerStyle = {}, centerAlign, topHeaderText, topHeaderStyle
}) => {


    return (
        <HeaderRNE
            containerStyle={[styles.headerContainer(tabBar), diffHeaderContainer]}
            placement={placement ? placement : 'center'}
            // placement={placement ? placement :'left'}

            leftContainerStyle={leftComponentStyles}
            leftComponent={
                leftComponent
                    ? leftComponent
                    : < View style={styles.headerLeft}>
                        {home && <TouchableOpacity
                            onPress={() => leftBtnOnPress ? leftBtnOnPress() : nav.goBack()}
                            activeOpacity={0.5}
                            style={[{ marginLeft: 0, alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20 },
                                backButtonContainerStyle]}
                            hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
                        >
                            <Image
                                source={next}
                                style={[{
                                    height: 22, width: 19, margin: 0, marginBottom: 10,
                                    tintColor: !tabBar ? Colors.COLOR_WHITE : Colors.APP_PRIMARY
                                }, backImgStyle]}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>}
                    </View>
            }

            rightComponent={
                rightComponent
                    ? rightComponent
                    : <View style={{}} />
            }
            rightContainerStyle={righComponentStyles}
            centerComponent={centerComponent ? centerComponent : {
                text: title, style: titleStyle ?
                    { ...titleStyle, ...{ paddingHorizontal: 0, width: Dimensions.get('window').width * 0.8, textAlign: 'center', marginLeft: centerAlign ? 0 : 20, fontSize: 20 } }
                    : { ...styles.heading(colorTitle), ...{ paddingHorizontal: 0, textAlign: 'center', width: Dimensions.get('window').width * 0.8, marginLeft: centerAlign ? 0 : 20 } },
            }}
            centerContainerStyle={{ width: '100%', }}
            barStyle={barStyle ? barStyle : statusBarStyle}
            statusBarProps={statusBarProps ? statusBarProps : { backgroundColor: statusBarBg }}

            topHeaderText={
                topHeaderText ? topHeaderText
                    : <View style={{}} />
                //topHeaderStyle={topHeaderStyle}
            }

        />
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: (tabBar) => ({
        backgroundColor: '#2B9330',
        width: '100%',
        //backgroundColor: "transparent",
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        alignItems: 'center',
    }),
    heading: (colorTitle) => ({
        color: !colorTitle ? COLORS.COLOR_WHITE : COLORS.APP_PRIMARY,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#fff', bottom: 5,
        right: 8,
        marginTop: Platform.OS == "ios" ? 5 : -2
    }),
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerRightComponent: {
        flexDirection: 'row',
    },
    imgSwitch: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
    imgMenu: {
        height: 30,
        width: 30,
    }
});