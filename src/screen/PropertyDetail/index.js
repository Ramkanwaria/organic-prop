
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, StyleSheet, TouchableOpacity, route } from "react-native";
import imagePath from "../../theme/imagePath";
import AppHeader from "../../navigation/appHeader";
import { FlatListComponent } from "react-native";
import Header from "../../navigation/appHeader";
const PropertyDetail = (props) => {
    const Data = [
        {
            id: 1,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 2,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 3,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 4,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },
        {
            id: 5,
            "position": "Sales Manager",
            photo: imagePath.mainImage,
        },


    ];
    const FlatListComponent = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{}}>
                                <View style={styles.itemContent}>
                                    <Image source={item.photo} style={styles.mainImageStyle} />

                                </View>
                            </View>
                        );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />

            </View>
        )
    }
    const conttactConponent = () => {
        return (
            <View style={styles.propertyView}>

                {/* <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    props.navigation.navigate('Edit_Profile');
                }}>
                    <View style={styles.contactView}>
                        <Text style={{ color: '#fff', fontSize: 13 }}>Contact</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        )
    }
    const BedroomsCompnent = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, bottom: 10 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 20, color: '#000' }}>Property 1</Text>
                        {/* <Image source={imagePath.edit} style={{ width: 14, height: 13 }} />
                        <Image source={imagePath.edit} style={{ width: 14, height: 13 }} />

                        <Image source={imagePath.delete} style={{ width: 14, height: 13 }} /> */}
                    </View>
                    <Text style={{ color: '#000', marginTop: 10 }}>31 waed,Pinlon Road,North Dagon </Text>
                </View>
                <View style={styles.mainView}>
                    <Image source={imagePath.hotel_bed} style={{ height: 20, width: 20 }} />
                    <Text style={styles.bedroomText}>4 Bedrooms</Text>
                    <Image source={imagePath.ruler} style={{ height: 15, width: 15, marginLeft: 4 }} />
                    <Text style={{ fontSize: 12, marginLeft: 4, color: '#000' }}>2,301</Text>
                </View>
                <Text style={{ color: "#000", fontSize: 15, marginHorizontal: 20, marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus luctus senectus felis blandit lorem dictum elit, sed est.
                    Diam pellentesque turpis urna, in nam sem fermentum lectus quam.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 15 }}>
                    <Image source={imagePath.reueya} style={{ width: 10, height: 12 }} />
                    <Text style={{ color: '#2B9330', fontSize: 18, marginLeft: 5 }}>85 Lakha</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#E1FEE3', borderRadius: 5,
                            paddingHorizontal: 5, padding: 10
                        }}>
                            <Text style={{ color: '#6A6A6A', fontSize: 16, textAlign: 'center' }}>Furnished</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#E1FEE3', borderRadius: 5,
                            paddingHorizontal: 5, padding: 10, marginLeft: 20
                        }}>
                            <Text style={{ color: '#6A6A6A', fontSize: 16, textAlign: 'center' }}>Ready to move</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const leftsideconponent = () => {
        return (
            <View style={{}}>

                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.goBack();
                }}>
                    <Image source={imagePath.next} style={{}} />
                </TouchableOpacity>



            </View>
        )
    }

    const titleName = () => {
        return (
            <View>
                <Text style={{ color: Colors.primary.WHITE, fontSize: fonts.SIZE_20 }}> Filter Property</Text>
            </View>
        )
    }
    return (
        <View>
            <Header
                leftComponent={() => leftsideconponent()}
                // rightComponent={() => rightsideComponent()}
                title={"Property_Detail"}
            />
            {FlatListComponent()}
            {conttactConponent()}
            {BedroomsCompnent()}

        </View>

    );
}
export default PropertyDetail;
const styles = StyleSheet.create({
    itemContent: {
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    propertyView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20
    },
    contactView: {
        backgroundColor: '#2b9330',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 30,
        padding: 8,
        marginHorizontal: 3
    },
    mainView: { flexDirection: 'row', alignItems: 'center', marginTop: 0, marginHorizontal: 20 },
    bedroomText: { fontSize: 12, marginLeft: 4, color: '#000' },
    mainImageStyle: {
        width: 260,
        height: 160,
        borderRadius: 10,
        resizeMode: 'cover',
        borderColor: '#fff',
        borderWidth: 0.6
    }

})