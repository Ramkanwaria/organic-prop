import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Colors from '../theme/color';
import imagePath from '../theme/imagePath';
import HomeScreen from '../screen/homeScreen';
import MyPropertyList from '../screen/myPropertyList';
import Favourite from '../screen/favourite';
import Notification from '../screen/notification';
import MyProfile from '../screen/myProfile';



const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const DeviceW = Dimensions.get('screen').width;

const RenderTabIcons = props => {
    const { icon, activeIcon, isFocused, name } = props;

    return (
        <View
            style={[
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: DeviceW / 4,
                    paddingTop: 10
                },
                isFocused ? {} : "",
            ]}>
            <Image
                source={isFocused ? icon : activeIcon}
                style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                    tintColor: isFocused ? "#2B9330" : '#313131',


                }}
            />

        </View>
    );
};

function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Overview"
                component={HomeScreen}
                options={{ headerShown: false, headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    );
}
function MyPropertyListStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyPropertyListTab"
                component={MyPropertyList}
                options={{ headerShown: false, headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    );
}
function FavouriteStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FavouriteTab"
                component={Favourite}
                options={{ headerShown: false, headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    );
}
function NotificationStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NotificationTab"
                component={Notification}

                options={{ headerShown: false, headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    );
}
function MyProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyProfileTab"
                component={MyProfile}
                options={{ headerShown: false, headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    );
}






const BottomTab = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                headerTitleAlign: 'center',
                tabBarStyle: {
                    height: Platform.OS == 'ios' ? 90 : 75,
                    backgroundColor: "#E1FEE3",
                    shadowColor: '#ffffff',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3,
                    elevation: 20,
                },
            }}>
            <Tabs.Screen
                name="HomeScreen"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: '',
                    keyboardHidesTabBar: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcons
                                icon={imagePath.home_fill}
                                activeIcon={imagePath.Frame_1}
                                //name={'HomeScreen'}
                                isFocused={focused}

                            />
                        );
                    },
                }}
                screenOptions={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Favourite"
                component={FavouriteStackNavigator}
                options={{
                    tabBarLabel: '',
                    keyboardHidesTabBar: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcons
                                icon={imagePath.Favourit}
                                name={'Favourite'}
                                isFocused={focused}
                                activeIcon={imagePath.favarit}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="MyPropertyList"
                component={MyPropertyListStackNavigator}
                options={{
                    tabBarLabel: '',
                    keyboardHidesTabBar: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcons
                                icon={imagePath.properyList}
                                //  name={'Edit_profile'}
                                isFocused={focused}
                                activeIcon={imagePath.property1}
                            />
                        );
                    },
                }}
            />

            <Tabs.Screen
                name="Notification"
                component={NotificationStackNavigator}
                options={{
                    tabBarLabel: '',
                    keyboardHidesTabBar: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcons
                                activeIcon={imagePath.bell}
                                icon={imagePath.notification_solis}
                                //name={'Notification'}
                                isFocused={focused}

                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="MyProfile"
                component={MyProfileStackNavigator}
                options={{
                    tabBarLabel: '',
                    keyboardHidesTabBar: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcons
                                activeIcon={imagePath.proFile12}
                                icon={imagePath.userPic}
                                // name={'MyProfile'}
                                isFocused={focused}
                            />
                        );
                    },
                }}
            />
        </Tabs.Navigator>
    );
};
export default BottomTab;
