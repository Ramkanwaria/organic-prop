
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from '../screen/login';
import Onboading from '../screen/onboarding';
import OtpVerification from '../screen/otpVerification';
import SignUp from '../screen/signUp';
import HomeScreen from '../screen/homeScreen';
import HomeScreen_Two from '../screen/homeScreen_Two';

import Edit_Profile from '../screen/edit_Profile';
import Home from '../screen/home';
import BottomTab from './bottomTab';
import Favourite from '../screen/favourite'
import PropertyDetail from '../screen/PropertyDetail';
import Filter_Screen from '../screen/filter_Screen';
import Add_propertyDetail from '../screen/add_propertyDetail';
import Add_Property_Location from '../screen/add_Property_Location';
import Add_Property from '../screen/add_Property';
import AddModel from '../screen/homeScreen/addModel';
import CityListModel from '../screen/homeScreen/cityListModel';
import Property_Detail_One from '../screen/property_Detail_one';

const Stack = createStackNavigator();

let isLoggedIn = null;

function Routes(props) {

    const [firstUpdate, setFirstUpdate] = useState(true);

    useEffect(() => {
        async function getData() {
            let temp = await AsyncStorage.getItem('isLoggedIn');
            isLoggedIn = JSON.parse(temp)
            setFirstUpdate(false)
        }
        getData();
    }, [])

    return (
        <>
            {firstUpdate == false
                ? (
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                headerBackVisible: false,
                                headerBackTitleVisible: false,
                                headerTitleAlign: 'center',
                            }}

                            initialRouteName={isLoggedIn ? "BottomTab" : "Login"}>


                            <Stack.Screen
                                name="Onboading"
                                component={Onboading}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }}
                            />

                            <Stack.Screen
                                name="OtpVerification"
                                component={OtpVerification}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="SignUp"
                                component={SignUp}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="HomeScreen_Two"
                                component={HomeScreen_Two}
                                options={{ headerShown: false }}
                            />
                            {/* <Stack.Screen
                    name="PropertyDetail"
                    component={PropertyDetail}
                    options={{ headerShown: false }}
                /> */}
                            <Stack.Screen
                                name="Edit_Profile"
                                component={Edit_Profile}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="BottomTab"
                                component={BottomTab}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Favourite"
                                component={Favourite}
                                options={{ headerShown: true }}
                            />
                            <Stack.Screen
                                name="PropertyDetail"
                                component={PropertyDetail}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Filter_Screen"
                                component={Filter_Screen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Add_propertyDetail"
                                component={Add_propertyDetail}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Add_Property_Location"
                                component={Add_Property_Location}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Add_Property"
                                component={Add_Property}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="AddModel"
                                component={AddModel}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Property_Detail_One"
                                component={Property_Detail_One}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name=" CityListModel"
                                component={CityListModel}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                )
                : null}
        </>

    );
}

export default Routes;
