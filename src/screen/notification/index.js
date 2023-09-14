import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
//import BottomTab from "../../navigation/bottomTab";
import imagePath from "../../theme/imagePath";
import Colors from "../../theme/color";
import Header from "../../navigation/appHeader";
import fonts from "../../theme/fonts";
import styles from './style'
const Notification = (props) => {
    const [color, setColor] = useState(true)
    const Data = [
        {
            id: 1,
            titme: '02:35 PM',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tortor tempor, sit orci pretium',
        },
        {
            id: 2,
            titme: '02:35 PM',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tortor tempor, sit orci pretium',
        },
        {
            id: 3,
            titme: '02:35 PM',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tortor tempor, sit orci pretium',
        },
        {
            id: 4,
            titme: '02:35 PM',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tortor tempor, sit orci pretium',
        },
        {
            id: 5,
            titme: '02:35 PM',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tortor tempor, sit orci pretium',
        },
    ]
    const renderItem = ({ index, item }) => {
        return (

            <View
                style={styles.renderItemStyle}>

                <View style={styles.mainView}>
                    <Text />
                    <Text style={styles.timeTextStyle}>{item.titme}</Text>

                </View>
                <View style={{ marginHorizontal: 10, }}>
                    <Text>{item.tittle}</Text>
                </View>
            </View>
        )
    }
    const rightsideComponent = () => {
        return (

            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Add_propertyDetail')
                }}>
                    <Image source={imagePath.Group_6} style={styles.rightHeaderStyle} />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                title={'Notifications'}
                rightComponent={() => rightsideComponent()}
            />
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
export default Notification;
