import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import Colors from "../../theme/color";
import imagePath from "../../theme/imagePath";
import AppHeader from "../../navigation/appHeader";
import Header from "../../navigation/appHeader";
import AddModel from "../homeScreen/addModel";
import styles from "./style";
import { FlatList } from "react-native";
const HomeScreen_Two = (props) => {
    const [like, setLike] = useState(false);
    const [click, setClick] = useState(false)
    const [reaction, setReaction] = useState(false)
    const [cityModelVisible, setCityModelVisible] = useState(false)
    const FeaturedProperties = [
        {
            id: 1,
            image: imagePath.mainImage,
            title: '31 ward , Pinlon Road , North Dagon',
            subtitle: '4 Bedrooms',
            titleone: '2,301 sqft',
            firstText: '85 Lakhs ',

        },
        {
            id: 2,
            image: imagePath.mainImage,
            title: 'South/North Junction , North Dagon',
            subtitle: '2 Bedrooms',
            titleone: '1131 sqft',
            firstText: '70, 000 ',

        },
        {
            id: 3,
            image: imagePath.mainImage,
            title: 'South/North Junction , North Dagon',
            subtitle: '3 Bedrooms',
            titleone: '1101 sqft',
            firstText: '75, 000 ',

        },

    ];
    const renderItem = ({ index, item }) => {
        return (

            <View key={index} style={{ marginHorizontal: 10 }
            }>

                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Property_Detail_One')
                }}>
                    <View style={{ marginTop: 10, }}>
                        <Image source={item.image} style={styles.imageStyle} />
                    </View>
                    <View style={styles.likeImageStyle} >
                        <View>
                            <TouchableOpacity

                                activeOpacity={0.6}
                                onPress={() => {

                                    setReaction(!reaction);
                                }}>
                                <Image style={{ width: 20, height: 20 }}
                                    source={reaction ? imagePath.seven : imagePath.six}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 3 }}>
                        <Text style={{ color: '#000' }}> {item.title} </Text>
                    </View>
                    <View style={styles.titleViewTwo} >
                        <Image source={imagePath.hotel_bed} style={styles.hotel_bedImage} />
                        <Text style={styles.bedroomText}> {item.subtitle} </Text>
                        < Image source={imagePath.ruler} style={styles.rulerImage} />
                        <Text style={styles.titleTextOne}> {item.titleone} </Text>
                    </View>
                    < View style={styles.titViewThree} >
                        <View style={styles.rulerImageView}>
                            <Image source={imagePath.reueya} style={styles.reueyaImage} />
                            <Text style={styles.TextStyle}> {item.firstText} </Text>
                        </View>

                        < TouchableOpacity activeOpacity={0.6} >
                            <View style={styles.contactView}>
                                <Text style={{ color: '#fff' }}> Contact </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </TouchableOpacity>
            </View>
        )
    }
    const flatList = () => {

        return (
            <FlatList
                data={FeaturedProperties}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}

            />
        )
    }

    const cityListModel = () => {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={cityModelVisible}>
                    <View style={styles.centered_View}>
                        <View style={styles.modal_View}>
                            <View style={styles.cityListView}>
                                <Text style={styles.searchText}>City List</Text>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    const leftsideconponent = () => {
        return (
            <View style={{ marginVertical: -21, paddingVertical: -30 }
            }>
                <Text style={{ fontSize: 14, color: '#fff', left: 35, top: 10 }}> Location </Text>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <Image source={imagePath.next} style={{ left: 5, top: 5 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.mainHeading} >

                    <Image source={imagePath.gps} style={{}} />
                    <Text style={styles.surabayaText} > {'Surabaya, '} </Text>
                    < Text style={styles.IndoTExt} > Indonesia </Text>
                    < Image source={imagePath.downArrow} style={styles.downArrowImg} />
                </TouchableOpacity>
            </View>
        )
    }
    const rightsideComponent = () => {
        return (
            <View style={{ alignItems: 'center', alignSelf: 'center', }
            }>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Filter_Screen')
                }} >
                    <View style={styles.equalizerImageView}>
                        <Image source={imagePath.equalizer} style={styles.equlizerImage} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container} >

            <Header
                leftComponent={() => leftsideconponent()}
                rightComponent={() => rightsideComponent()}
            />
            <ScrollView showsHorizontalScrollIndicator={false} >
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500' }}>
                        Featured Properties
                    </Text>
                </View>
                {flatList()}
                {cityListModel()}
            </ScrollView>
        </View>
    );
}
export default HomeScreen_Two;
