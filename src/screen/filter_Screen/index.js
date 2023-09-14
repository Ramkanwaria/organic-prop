// Global Imports
import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";

// Component Imports
import AppButton from '../../component/commanButton';
import Header from "../../navigation/appHeader";
// File Imports
import imagePath from "../../theme/imagePath";
import styles from "./style";

const Filter_Screen = (props) => {
    const [isOpen, setIsOpen] = useState(0);
    const [select, setSelect] = useState(0);
    const [data, setData] = useState(1);
    const [propery, setProperty] = useState(1);
    const [maxdata, setMaxData] = useState(0)
    const [avaibility, setAvaibility] = useState(0);
    const [ammenities, setAmmenities] = useState(0);
    const [ageproperty, setAgeproperty] = useState(0)
    const PropertyData = [
        {
            id: 1,
            title: 'Owner'
        },
        {
            id: 2,
            title: 'Broker',
        },
        {
            id: 3,
            title: 'Builder'
        },
    ];

    const bedrooms = [
        {
            id: 1,
            title: '1',
        },
        {
            id: 2,
            title: '2',
        },
        {
            id: 3,
            title: '3',
        },
        {
            id: 4,
            title: '4',
        },
        {
            id: 5,
            title: '4+',
        },
    ];
    const Balconies = [
        {
            id: 1,
            title: '1',
        },
        {
            id: 2,
            title: '2',
        },
        {
            id: 3,
            title: '3',
        },
        {
            id: 4,
            title: '3+',
        },

    ];
    const Avaibility = [
        {
            id: 1,
            title: 'Ready to move'
        },
        {
            id: 1,
            title: 'Under construction'
        },
        {
            id: 1,
            title: 'New Launch'
        },
    ];
    const furnish = [
        {
            id: 1,
            title: 'Furnished',
        },
        {
            id: 2,
            title: 'Semi-Furnished',
        },

        {
            id: 3,
            title: 'Un-Furnished',
        },


    ];
    const Ammenities = [
        {
            id: 1,
            title: 'Maintenance Staff',
        },
        {
            id: 1,
            title: 'Security/Fire Alarm',
        },
        {
            id: 1,
            title: 'Park',
        },
        {
            id: 1,
            title: 'Lift',
        },
        {
            id: 1,
            title: 'Swimming Pool',
        },
    ];
    const ageofProperty = [
        {
            id: 1,
            title: '0-1 Year',
        },
        {
            id: 2,
            title: '1-5 Year',
        },
        {
            id: 3,
            title: '5-10 Year',
        },
        {
            id: 4,
            title: '10+ Year',
        },
    ];
    const ByPrice = [
        {
            id: 1,
            title: 'Minimum ',
            image: imagePath.BuildingImg,
        },
        {
            id: 2,
            title: 'Maximum ',
            image: imagePath.Home,
        },

    ];


    const leftsideComponent = () => {
        return (

            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.goBack();
                }}>
                    <Image source={imagePath.next} style={{ marginBottom: 20 }} />
                </TouchableOpacity>

            </View>
        )
    }

    const PropertyFor = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>Property For</Text>
                </View>
                <View style={styles.sellView}>
                    {PropertyData.map((property, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => setIsOpen(index)}>
                                <View style={{ flexDirection: 'row', }}>

                                    <View style={styles.radio_onView}>
                                        {isOpen == index && <Image style={{ width: 13, height: 13, marginTop: 3 }}
                                            source={imagePath.radio_on}
                                            resizeMode={'contain'}
                                        />}
                                    </View>
                                    <Text style={styles.propertyTitle}>{property.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        )
    }

    const NoOfBedRoom = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>
                        No.of Bedrooms
                    </Text>
                </View>
                <View style={styles.bedRoomView}>
                    {bedrooms.map((textData, index) => {
                        return (

                            <TouchableOpacity key={index} onPress={() => setSelect(index)}>
                                <View style={{ padding: 2 }} >
                                    <View style={{
                                        height: 30, width: 60, borderRadius: 5, marginLeft: 5, backgroundColor:
                                            select == index ? '#2B9330' : '#E1FEE3'
                                    }}>
                                        <Text style={{
                                            color: select == index ? '#FDFBFB' : '#6A6A6A', alignSelf: 'center',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 5,
                                            marginLeft: 0
                                        }}>{textData.title}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )
                    })}
                </View>
            </View>
        )
    }
    const NoOfBalconies = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>No.of Balconies</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 20, }}>
                    {Balconies.map((balconiesText, index) => {
                        return (

                            <TouchableOpacity key={index} onPress={() => setData(index)}>
                                <View style={{ padding: 7 }}>
                                    <View style={{
                                        height: 30, width: 60, borderRadius: 5, backgroundColor:
                                            data == index ? '#2B9330' : '#E1FEE3'
                                    }}>
                                        <Text style={{
                                            color: data == index ? '#fdfbfb' : '#6a6a6a',
                                            alignSelf: 'center', alignItems: 'center',
                                            justifyContent: 'center', marginTop: 5,
                                            marginLeft: 0
                                        }}>{balconiesText.title}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>

                        )
                    })}
                </View>
            </View>
        )
    }
    const AvaibilityStatus = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>
                        Avaibility Status
                    </Text>
                </View>
                <View style={styles.avaibilityView}>
                    {Avaibility.map((Status, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => {
                                setAvaibility(index)
                            }} style={{
                                backgroundColor: avaibility == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 10,
                                paddingHorizontal: 17,
                                borderRadius: 10,
                                borderColor: '#E1FEE3',
                                borderWidth: 1,
                            }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                    setAvaibility(index)

                                }} >
                                    <Text style={{ fontSize: 16, color: avaibility == index ? '#fff' : '#6A6A6A' }}>{Status.title}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
    const Furnishing = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>
                        By Furnishing
                    </Text>
                </View>
                <View style={styles.ageofView}>
                    {furnish.map((furnish, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => { setProperty(index) }} style={{
                                backgroundColor: propery == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 10,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                borderColor: '#E1FEE3',
                                borderWidth: 1,
                            }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => { setProperty(index) }}>
                                    <Text style={{ fontSize: 16, color: propery == index ? '#fff' : '#6A6A6A' }}>{furnish.title}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
    const AmmenitiesTpye = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>
                        Ammenities
                    </Text>
                </View>
                <View style={styles.ammenitiesView}>
                    {Ammenities.map((Ammeni_data, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => { setAmmenities(index) }} style={{
                                backgroundColor: ammenities == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 8,
                                paddingHorizontal: 13,
                                borderRadius: 10,
                                borderColor: '#E1FEE3',
                                borderWidth: 1,
                            }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => { setAmmenities(index) }}>
                                    <Text style={{ fontSize: 16, color: ammenities == index ? '#fff' : '#6A6A6A' }}>{Ammeni_data.title}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
    const PropertyAge = () => {
        return (
            <View>
                <View style={styles.ageOfview}>
                    <Text style={styles.ageOfText}>
                        Age of Property
                    </Text>
                </View>
                <View style={styles.ageofView}>
                    {ageofProperty.map((Ammeni, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => { setAgeproperty(index) }} style={{
                                backgroundColor: ageproperty == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 10,
                                paddingHorizontal: 17,
                                borderRadius: 10,
                                borderColor: '#E1FEE3',
                                borderWidth: 1,
                            }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => { setAgeproperty(index) }}>
                                    <Text style={{ fontSize: 16, color: ageproperty == index ? '#fff' : '#6A6A6A' }}>{Ammeni.title}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
    const PropertyType = () => {
        return (
            <View >
                <Text style={styles.typeText}>By Price</Text>
                <View style={styles.typeView}>


                    <View>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => {
                                setMaxData(index)
                            }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',

                            }} >
                                <View style={styles.enterView}>
                                    <TextInput
                                        placeholder="Minimum "
                                        placeholderTextColor="#6A6A6A"
                                        style={styles.minButtonStyle}
                                    />
                                </View>
                                <TextInput
                                    placeholder="Maximum "
                                    placeholderTextColor="#6A6A6A"
                                    style={styles.maxButtonStyles}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }
    const NextButton = () => {
        return (
            <AppButton
                bttName={"Apply Filter"}
                marginBottom={16}
                onPress={() => {
                    props.navigation.goBack();
                }}
            />
        )
    }
    return (
        <View style={styles.container}>
            <Header
                title={"Filter_Screen"}
                leftComponent={() => leftsideComponent()}

            />
            <ScrollView>
                {PropertyFor()}

                {NoOfBedRoom()}
                {NoOfBalconies()}
                {AvaibilityStatus()}
                {Furnishing()}
                {AmmenitiesTpye()}
                {PropertyAge()}
                {PropertyType()}
                {NextButton()}
            </ScrollView>
        </View>
    );
}
export default Filter_Screen
