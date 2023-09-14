import { showMessage } from "react-native-flash-message"
import AsyncStorage from '@react-native-async-storage/async-storage';



export function showErrorMsg(msg) {
    return showMessage({
        message: msg,
        type: "danger",
        backgroundColor: "red",
        position: 'bottom',
        duration: 10000

    })
}

export function showSuccessMsg(msg) {
    return showMessage({
        message: msg,
        type: "success",
        backgroundColor: "green",
        position: 'bottom',
        duration: 2000,
    })
}

export const setLocaItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Not Set Data in Local Starage:', error);
    }
};
export const getLocalItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('Get Get Data to set Local Storage:', error);
        return null;
    }
};



