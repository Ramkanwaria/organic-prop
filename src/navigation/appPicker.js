import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Colors from "../theme/color";
import font from "../theme/fonts";
import imagePath from "../theme/imagePath";

const AppPicker = (props) => {
    return (
        <View
            style={[
                styles.Picker_view,
                {
                    marginTop: props.marginTop ? props.marginTop : 0,
                    bottom: props.bottom ? props.bottom : 5,
                    width: props.width ? props.width : "72%",
                    height: 45,
                    dropdown: 'bottom',
                    backgroundColor: "white",
                },
            ]}
        >
            <RNPickerSelect
                placeholder={
                    props.placeholder
                        ? props.placeholder
                        : { label: "Select Category", value: null }
                }
                items={
                    props.items
                        ? props.items
                        : [
                            { label: "Title 1", value: "Title 1", color: 'red' },
                            { label: "Title 2", value: "Title 2", color: 'red' },
                        ]
                }
                placeholderTextColor={
                    props.placeholderTextColor ? props.placeholderTextColor : "#6A6A6A"
                }
                Value={props.Value}
                onValueChange={props.onValueChange}
                useNativeAndroidPickerStyle={false}
                disabled={false}
                style={{
                    ...pickerSelectStyles,
                    iconContainer: { position: "absolute", top: 20, right: 15 },
                }}
                Icon={() => {
                    return (
                        <TouchableOpacity>
                            <Image
                                source={
                                    props.img_down == true ? imagePath.down : imagePath.time_down
                                }
                                style={{ width: 24, height: 24 }}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default AppPicker;

const styles = StyleSheet.create({
    Picker_view: {

        alignSelf: "center",
        borderRadius: 10,
        // marginBottom: 10,
        paddingHorizontal: 12,
        // elevation: 4,
        // marginLeft: 15
        // borderWidth: 1,
        // borderColor: '#3C7FE8',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        color: '#6A6A6A',
        maxWidth: "100%",
        minWidth: "100%",
        height: 50,
        fontSize: 16,
        elevation: 9,

    },
    inputAndroid: {
        color: '#6A6A6A',
        maxWidth: "100%",
        minWidth: "100%",
        height: 50,
        marginLeft: 13,
        fontSize: 16,

    },
});