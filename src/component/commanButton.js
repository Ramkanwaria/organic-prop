import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../theme/color";
const AppButton = (props) => {
    return (
        <TouchableOpacity
            disabled={props?.disabled}
            activeOpacity={0.8}
            onPress={() => props.onPress()}
            style={{

                height: props.height ? props.height : 120,
                width: props.width ? props.width : 355,
                borderRadius: props.borderRadius ? props.borderRadius : 30,
                marginHorizontal: props.marginHorizontal ? props.marginHorizontal : 20,
                marginVertical: props.marginVertical ? props.marginVertical : 40,
                justifyContent: 'center',
                marginTop: props.marginTop,
                marginBottom: props.marginBottom ? props.marginBottom : 0,
                width: props.width,
                height: props.height ? props.height : 50,
                backgroundColor: props.backgroundColor ? props.backgroundColor : '#2b9330'

            }}>
            <Text style={[
                props.textStyle ? props.textStyle : {
                    textAlign: "center",
                    color: props.color ? props.color : Colors.primary.WHITE,
                    fontWeight: props.fontWeight ? props.fontWeight : '500',
                    fontsize: 18,
                },
            ]}>
                {props.bttName}
            </Text>
        </TouchableOpacity>
    );
};
export default AppButton;