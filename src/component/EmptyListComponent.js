import React from "react";
import { View, Text, Image, } from "react-native"
import Colors from "../theme/color";
const EmptyListComponent = (props) => {
    return (
        <View>
            {props.centerImage ? (
                <Image source={props.centerImage} style={{

                    width: 139,
                    height: 123,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 250,

                }} />
            ) : null}
            <Text style={[
                props.textStyle ? props.textStyle : {
                    textAlign: "center",
                    color: props.color ? props.color : Colors.primary.BLACK,
                    fontSize: 19,
                    marginTop: 30,
                    fontWeight: '600',
                    lineHeight: 20

                },
            ]}>
                {props.textName}
            </Text>
        </View>
    )
}
export default EmptyListComponent;