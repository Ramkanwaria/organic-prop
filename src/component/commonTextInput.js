import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Colors from "../theme/color";
import font from "../theme/fonts";
import imagePath from "../theme/imagePath";

const AppInput = (props) => {
    return (
        <View>
            <View
                style={{
                    borderRadius: props.borderRadius ? props.borderRadius : 5,
                    alignSelf: "center",
                    alignItems: "center",
                    marginHorizontal: props.marginHorizontal
                        ? props.marginHorizontal
                        : 15,
                    height: props.height ? props.height : 48,
                    width: props.width ? props.width : 355,
                    backgroundColor: props.backgroundColor
                        ? props.backgroundColor
                        : Colors.primary.WHITE,
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    bottom: 30,
                    marginVertical: 10,
                    borderColor: props.borderColor ? props.borderColor : Colors.secondary.MEDIUM_GRAY,
                    borderWidth: 1,
                    marginTop: props.marginTop,

                }}
            >
                {props.leftIcon ? (
                    <Image
                        source={props.leftIcon}
                        style={{
                            height: 18,
                            width: 20,
                            resizeMode: "contain",
                            marginLeft: 8,
                        }}
                    />
                ) : null}

                <TextInput
                    style={{
                        flex: 1,
                        fontSize: font.SIZE_17,
                        color: props.colorText ? props.colorText : Colors.secondary.DARK_BLUE,
                        paddingHorizontal: 11,
                    }}
                    value={props.value}
                    placeholder={props.placeholder}
                    placeholderTextColor={
                        props.placeholderTextColor
                            ? props.placeholderTextColor
                            : Colors.primary.GRAYISH
                    }
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChangeText}
                    blurOnSubmit={props.blurOnSubmit}
                    keyboardType={props.keyboardType || "default"}
                    returnKeyType={props.returnKeyType}
                    underlineColorAndroid="transparent"
                    autoFocus={props.autoFocus}
                    maxLength={props.maxLength}
                    multiline={props.multiline}
                    ref={props.getFocus}
                    onSubmitEditing={props.setFocus}
                    editable={props.editable}
                />
                {props.rightIcon ? (
                    <TouchableOpacity
                        onPress={() => props.onPressEye()}
                        hitSlop={{ right: 20, left: 20, top: 10, bottom: 10 }}
                        style={{ justifyContent: "center", marginRight: 5 }}
                    >
                        <Image
                            source={props.rightIcon}
                            style={{
                                height: 20,
                                width: 22,
                                resizeMode: "contain",
                            }}
                        />
                    </TouchableOpacity>
                ) : (
                    <View />
                )}
            </View>
            {props.isErrorMsg ? (
                <Text
                    style={[
                        styles.error,
                        { marginHorizontal: props.errorMargin ? props.errorMargin : 32 },
                    ]}
                >
                    {props.isErrorMsg}
                </Text>
            ) : (
                <View />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        fontFamily: font.Roboto_Regular,
        fontSize: font.SIZE_17,
        color: "#E01E61",
        marginHorizontal: 32,
        bottom: 6,
    },
    text_code: {
        fontFamily: font.Roboto_Regular,
        fontSize: font.SIZE_16,
        color: Colors.primary.BLACK,
    },
    view_bar: {
        height: 20,
        width: 2,
        backgroundColor: Colors.primary.GRAYISH,
        marginLeft: 5,
    },
    view_code: {
        flexDirection: "row",
        alignItems: "center",
    },
    img_down: {
        height: 15,
        width: 13,
        marginHorizontal: 4,
        marginRight: 6,
    },
});

export default AppInput;
