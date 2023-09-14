import React from "react";
import { View, ActivityIndicator } from "react-native";
const Loader = (props) => {
    return (
        <View style={{ backgroundColor: `rgba(0,0,0,0.8)`, position: 'absolute', width: '100%', height: '100%' }}>
            <ActivityIndicator size="large" color="green" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
        </View>
    )
}
export default Loader