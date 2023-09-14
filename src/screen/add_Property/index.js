import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import imagePath from "../../theme/imagePath";
import AppInput from "../../component/commonTextInput";
import fonts from "../../theme/fonts";
import AppButton from "../../component/commanButton";
import Header from "../../navigation/appHeader";
const Add_Property = (props) => {
    const [isOpen, setIsOpen] = useState(0);

    const titleName = () => {
        return (
            <View>
                <Text style={{ color: '#ffffff', fontSize: fonts.SIZE_18 }}>Add Property</Text>
            </View>
        )
    }
    const leftsideComponent = () => {
        return (
            <View style={{ marginHorizontal: 10 }}>
                <Image source={imagePath.next} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                title={() => titleName()}
                leftComponent={() => leftsideComponent()}

            />

        </View>
    );
    const handelError = (errorMessage, input) => {
        setError((preState) => ({ ...preState, [input]: errorMessage }))
    }
}
export default Add_Property;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
