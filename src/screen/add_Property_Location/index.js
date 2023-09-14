import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Picker, ScrollView, Image } from "react-native";
import fonts from "../../theme/fonts";
import AppInput from "../../component/commonTextInput";
import imagePath from "../../theme/imagePath";
import AppButton from "../../component/commanButton";
import Header from "../../navigation/appHeader";
const Add_Property_Location = (props) => {

    const NextButton = () => {
        return (
            <AppButton
                bttName={"Next"}
                marginBottom={20}
                onPress={() => {
                    props.navigation.navigate('Add_Property')

                }}
            />
        )
    }
    const titleName = () => {
        return (
            <View>
                <Text style={{ color: '#ffffff', fontSize: fonts.SIZE_18 }}>Add Property</Text>
            </View>
        )
    }
    const leftsideComponent = () => {
        return (
            <View>
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
            <ScrollView>


                {NextButton()}
            </ScrollView>
        </View>
    );
}
export default Add_Property_Location;
const styles = StyleSheet.create({
    container: { flex: 1 },

})