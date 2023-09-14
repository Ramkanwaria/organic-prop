import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, Modal, } from "react-native";
import imagePath from "../../theme/imagePath";
import Colors from "../../theme/color";
import fonts from "../../theme/fonts";
import AppButton from '../../component/commanButton';
import Header from "../../navigation/appHeader";
import AppInput from "../../component/commonTextInput";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-virtualized-view';
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_PROPERY } from "../../Helper/ApiConstant";
import { useIsFocused } from "@react-navigation/native";
//import AddModel from "./addModel";
const Add_propertyDetail = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(0);
    const [select, setSelect] = useState(0);
    const [data, setData] = useState(1);
    const [propery, setProperty] = useState(1);
    const [avaibility, setAvaibility] = useState(0);
    const [chechdata, setCheckData] = useState(1);
    const [byfurnish, setByfurnish] = useState(1);
    const [ammenities, setAmmenities] = useState(1);
    const [ageproperty, setAgeproperty] = useState(1);
    const [tenantChecked, setTenantChecked] = useState(0);
    const [dropdown, setDropdown] = useState('');
    const [dropdownone, setDropdownOne] = useState('')
    const [dropdowntow, setDropdowntow] = useState('')
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [rightcheck, setRightCheck] = useState(1)
    const [filePath, setFilePath] = useState(null);
    const [photo, setPhotoURI] = useState(null);
    const [images, setImages] = useState([]);
    const [textone, setTextone] = useState()
    const [texttwo, setTextTwo] = useState()
    const [textthree, setTextThree] = useState()
    const [propertyDetail, setPropertyDetail] = useState([])
    const isFocused = useIsFocused();

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 400,
            quality: 1,
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            // console.log('base64 -> ', response.base64);
            // console.log('uri -> ', response.uri);
            // console.log('width -> ', response.width);
            // console.log('height -> ', response.height);
            // console.log('fileSize -> ', response.fileSize);
            // console.log('type -> ', response.type);
            // console.log('fileName -> ', response.fileName);
            console.log(response.assets[0].uri);
            setFilePath(response);
            setShowModal(!showModal)
        });
        // }
    };

    const chooseFile = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            MultiSelect: true,
        };

        await launchImageLibrary(options, (response) => {
            if (response.didCancel) {

            } else {
                setImages(itemValue => [response.assets[0], ...itemValue]);
            }
            // //setImages(response)
            // 

            setShowModal(!showModal)

        });
    };

    const Data = [
        { label: 'Item 111', value: '1' },
        { label: 'Item 2222', value: '2' },
    ];
    const DataItem = [
        { label: 'Item 001', value: '1' },
        { label: 'Item 002', value: '2' }
    ];
    const DataItemtow = [
        { label: 'Item 101', value: '1' },
        { label: 'Item 2', value: '2' }
    ]
    const persons = [
        {
            id: "1",
            name: "All Inclusive price",
        },
        {
            id: "2",
            name: "Tax & Govt. charges excluded",
        },
        {
            id: "3",
            name: "Price Negotiable",
        },
    ];
    const PropertyData = [
        {
            id: 1,
            title: 'Sell'
        },
        {
            id: 2,
            title: 'Rent/Lease',
        },
        {
            id: 3,
            title: 'PG'
        },
    ];
    const nextData = [
        {
            id: 1,
            title: 'one',
        },
        {
            id: 2,
            title: 'two',
        },
        {
            id: 3,
            title: 'three',
        },
    ];
    const properyType = [
        {
            id: 1,
            title: 'Commercial',
            image: imagePath.BuildingImg,
        },
        {
            id: 2,
            title: 'Residential',
            image: imagePath.Home,
        },
        {
            id: 3,
            title: 'Land/Plot',
            image: imagePath.landLot,

        },
        {
            id: 4,
            title: 'Villa',
            image: imagePath.BuildingImg
        },
        {
            id: 5,
            title: 'shop',
            image: imagePath.shop
        }
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
    const DATAList = [
        {
            id: 1,
            title: 'First Item',
            name: 'Maintenance Staff',
        },
        {
            id: 2,
            title: 'Security/Fire Alarm',
            name: 'qwqw',
        },
        {
            id: 3,
            title: 'Park',
            name: 'qwqw',
        },
        {
            id: 4,
            title: 'Lift',
            name: 'qwqw',
        },
        {
            id: 5,
            title: 'Swimming Pool',
            name: '',
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
    const flatData = [
        {
            id: 1,
            flatImage: imagePath.one,
            flatItem: 'xckjc',
        },
        {
            id: 2,
            flatImage: imagePath.mainImage,
        },
        {
            id: 3,
            flatImage: imagePath.three,
        }
    ]
    const flatListData = [
        {
            id: 1,
            title: ' Camera ',
        },
        {
            id: 2,
            title: ' Gallery',
        },
        {
            id: 3,
            title: 'Cancle',
        },
    ];

    useEffect(() => {


        AddProperty(6, "c578357a9d38408e8903a5215c14c69f")

    }, []);
    // const getData = async () => {
    //     try {
    //         const userID = await AsyncStorage.getItem('USER_ID');
    //         const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');



    //         AddProperty(userID, authTokens)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const AddProperty = async (Userid, authtoken) => {
        const userID = await AsyncStorage.getItem('USER_ID');
        const authTokens = await AsyncStorage.getItem('AUTH_TOKEN');

        var myHeaders = new Headers();
        myHeaders.append("userid", userID);
        myHeaders.append("authtoken", JSON.parse(authTokens));

        // var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: urlencoded,
            redirect: 'follow'
        };

        fetch(ADD_PROPERY + `?userid=${Userid}&authtoken=${authtoken}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status) {
                    console.log(result?.data?.propertyTypes, "<=====DATA")
                    setPropertyDetail(result?.data)
                } else {
                    // alert(result, '<===')
                }
            })
            .catch(error => console.log('error', error));
    }
    const titleName = () => {
        return (
            <View>
                <Text style={{ color: '#ffffff', fontSize: fonts.SIZE_20 }}>Add Property</Text>
            </View>
        )
    }
    const leftsideComponent = () => {
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => chechdata == 1 ? props.navigation.goBack() : setCheckData(chechdata - 1)} >
                    <Image source={imagePath.next}

                    />
                </TouchableOpacity>
            </View>
        )
    }

    const PropertyFor = () => {

        return (
            <View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.propertyView}>Property For</Text>
                </View>
                <View style={styles.sellView}>


                    {propertyDetail?.propertyFor?.map((property, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setIsOpen(index)}>
                                <View style={{ flexDirection: 'row', }}>

                                    <View style={styles.radio_onView}>
                                        {isOpen == index && <Image style={{ width: 13, height: 13, marginTop: 2.5 }}
                                            source={imagePath.radio_on}
                                            resizeMode={'contain'}
                                        />}
                                    </View>
                                    <Text></Text>
                                    <Text style={{ color: '#6A6A6A', fontSize: fonts.SIZE_18, marginLeft: 10 }}>{property.item2}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>

            </View>
        )
    }
    const showComponent = () => {
        return (


            <View style={{}}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>

                    <TouchableOpacity style={{}}>

                        <View style={styles.radio_onView}>
                            <View style={{
                                borderColor: "#2B9330",
                                alignItems: "center",
                                justifyContent: 'center',
                                height: 24,
                                width: 24,
                                marginLeft: 0,
                                bottom: 2,
                                borderRadius: 15,
                                backgroundColor:
                                    chechdata >= 1 ? '#2B9330' : '#D1D5DB'
                            }}>
                                <View style={styles.headingOne}>

                                </View>
                                {chechdata >= 1 ? <Image style={{ width: 13, height: 13, bottom: 1 }}
                                    source={imagePath.right}
                                    resizeMode={'contain'} /> : null}
                            </View>

                            <Text style={styles.textHeading}>

                            </Text>
                        </View>



                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>

                        <View style={styles.radio_onView}>


                            <View style={{
                                borderColor: "#2B9330",
                                alignItems: "center",
                                justifyContent: 'center',
                                borderRadius: 15, bottom: 1,
                                height: chechdata >= 2 ? 24 : 13, width: chechdata >= 2 ? 24 : 13, top: chechdata >= 2 ? -2 : 2,
                                backgroundColor:
                                    chechdata >= 2 ? '#2B9330' : '#D1D5DB'
                            }}>

                                <View style={{
                                    backgroundColor: '#D1D5DB', height: 2, width: 142, borderWidth: 1,
                                    borderColor: '#D1D5DB', marginLeft: 165, top: chechdata >= 2 ? 7 : 2
                                }}>

                                </View>

                                {chechdata >= 2 ? <Image style={{ width: 13, height: 13, bottom: 1 }}
                                    source={imagePath.right}
                                    resizeMode={'contain'} /> : null}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>

                        <View style={styles.radio_onView}>

                            <View style={{
                                top: chechdata >= 3 ? -2 : 2,
                                alignItems: 'center', justifyContent: 'center',
                                height: chechdata >= 3 ? 24 : 13, width: chechdata >= 3 ? 24 : 13, borderRadius: 15,
                                backgroundColor:
                                    chechdata >= 3 ? '#2B9330' : '#D1D5DB',
                            }}>
                                {chechdata >= 3 ? <Image style={{ width: 13, height: 13, }}
                                    source={imagePath.right}
                                    resizeMode={'contain'} /> : null}
                            </View>
                        </View>
                        <Text style={{ color: '#6A6A6A', fontSize: fonts.SIZE_18, marginLeft: 10 }}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    const PropertyType = () => {
        return (
            <View style={{}}>
                <Text style={styles.typeText}>Property Type</Text>
                <View style={styles.typeView}>
                    {propertyDetail?.propertyTypes?.map((Type, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setProperty(index)
                                    }}>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 0 }}>
                                        <View style={{
                                            padding: 10,
                                            margin: 10,
                                            paddingHorizontal: 10,
                                            borderRadius: 10,
                                            borderColor: '#BCBCBC',
                                            borderWidth: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center', backgroundColor:
                                                propery == index ? '#2B9330' : '#fff'
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                marginLeft: 4
                                            }}>
                                                <Image source={imagePath.BuildingImg} style={{
                                                    tintColor: propery == index ? '#FDFBFB' : '#6A6A6A',
                                                    height: 20,
                                                    width: 20,
                                                    marginRight: 7
                                                }} />
                                                <Text style={{ color: propery == index ? '#FDFBFB' : '#6A6A6A' }}>{Type.name}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}

                </View>
            </View>
        )
    }
    const NoOfBedRoom = () => {
        return (
            <View>
                <View style={styles.bedroomsView}>
                    <Text style={{ fontSize: 20, color: '#000', }}>
                        No.of Bedrooms
                    </Text>
                </View>
                <View style={styles.NumberBedroom}>
                    {bedrooms.map((textData, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity onPress={() => setSelect(index)}>
                                    <View style={{ padding: 2 }} >
                                        <View style={{
                                            height: 30,
                                            width: 60,
                                            borderRadius: 5,
                                            marginLeft: 5,
                                            backgroundColor:
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
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }


    const NoOfBalconies = () => {
        return (
            <View>
                <View style={styles.balconies}>
                    <Text style={{ fontSize: 20, color: '#000' }}>No.of Balconies</Text>
                </View>
                <View style={styles.balconiesView}>
                    {Balconies.map((balconiesText, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity onPress={() => setData(index)}>
                                    <View style={{ padding: 7 }}>
                                        <View style={{
                                            height: 30, width: 60, borderRadius: 5, backgroundColor:
                                                data == index ? '#2B9330' : '#E1FEE3'
                                        }}>
                                            <Text style={{
                                                color: data == index ? '#fdfbfb' : '#6a6a6a',
                                                alignSelf: 'center', alignItems: 'center',
                                                justifyContent: 'center', marginTop: 5,
                                            }}>{balconiesText.title}</Text>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
    const AvaibilityStatus = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: '#000' }}>
                        Avaibility Status
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.avaibilityView}>
                    {Avaibility.map((Status, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { setAvaibility(index) }} key={index} style={{
                                backgroundColor: avaibility == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 8,
                                paddingHorizontal: 17,
                                borderRadius: 10,
                                borderColor: '#E1FEE3',
                                borderWidth: 1,
                            }}>
                                <Text style={{ fontSize: 16, color: avaibility == index ? '#fff' : '#6A6A6A' }}>{Status.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </TouchableOpacity>
            </View>
        )
    }
    const Furnishing = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, color: '#000' }}>
                        By Furnishing
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.furnishTouchable}>
                    {furnish.map((Status, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { setAmmenities(index) }} key={index} style={{
                                backgroundColor: ammenities == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 8,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                borderColor: '#E1FEE3',
                                borderWidth: 1,
                            }}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => { setAmmenities(index) }}>
                                    <Text style={{ fontSize: 16, color: ammenities == index ? '#fff' : '#6A6A6A' }}>{Status.title}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </TouchableOpacity>
            </View>
        )
    }

    const PropertyAge = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: '#000' }}>
                        Age of Property
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.ageofView}>
                    {ageofProperty.map((Ammeni, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { setAgeproperty(index) }} key={index} style={{
                                backgroundColor: ageproperty == index ? '#2B9330' : '#E1FEE3',
                                padding: 10,
                                margin: 8,
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
                </TouchableOpacity>
            </View>
        )
    }
    const CarpetArea = () => {
        // console.log("Dropdown")

        return (
            <View>
                <View style={styles.superView}>
                    <Text style={styles.superText}>
                        Carpet Area
                    </Text>
                </View>
                <View style={styles.entervalueView} >
                    <TextInput
                        placeholder="ENTER VALUE"
                        value={textone}
                        onChangeText={setTextone}
                        keyboardType="default"

                        style={styles.dropdownViewOne}

                    />
                    {/* mesurementUnits */}
                    <View style={styles.dropdownOne}>
                        <Dropdown
                            style={styles.dropdown}
                            containerStyle={styles.shadow}
                            data={propertyDetail?.mesurementUnits}
                            // labelField="name"
                            labelField={"name"}
                            valueField="name"
                            label="name"
                            // placeholder="Sq.Ft"
                            placeholderStyle={{ color: '#6A6A6A' }}
                            value={dropdown}
                            onChange={item => {
                                setDropdown(item.name);
                                console.log('selected', item);
                            }}
                            renderLeftIcon={() => (
                                <Image style={styles.iconOne} source={require('../../Assest/images/downArrow.png')} />
                            )}
                            // renderItem={item => _renderItem(item)}
                            textError="Error"
                        />
                    </View>
                </View>
            </View>
        )
    }

    const builtUpArea = () => {
        return (
            <View>
                <View style={styles.superView}>
                    <Text style={styles.superText}>
                        Built-up Area
                    </Text>
                </View>
                <View style={styles.entervalueView} >
                    <TextInput
                        placeholder="ENTER VALUE"
                        value={texttwo}
                        onChangeText={text => {
                            setTextTwo(text)
                        }}
                        keyboardType="default"
                        style={styles.dropdownViewTwo}

                    />
                    <View style={styles.dropdownTwo}>
                        <Dropdown
                            style={styles.dropdown}
                            containerStyle={styles.shadow}
                            data={propertyDetail?.mesurementUnits}
                            labelField="name"
                            valueField="name"
                            label="Dropdown"
                            placeholder="Sq.Ft"
                            placeholderStyle={{ color: '#6A6A6A' }}
                            value={dropdowntow}
                            onChange={item => {
                                setDropdowntow(item.name);
                                console.log('selected', item);
                            }}
                            renderLeftIcon={() => (
                                <Image style={styles.iconOne} source={require('../../Assest/images/downArrow.png')} />
                            )}
                            // renderItem={item => _renderItem(item)}
                            textError="Error"
                        />
                    </View>
                </View>
            </View>
        )
    }
    const DropdownScreen = () => {
        return (
            <View>
                <View style={styles.superView}>
                    <Text style={styles.superText}>
                        Super Built-up Area
                    </Text>
                </View>
                <View style={styles.entervalueView} >
                    <TextInput
                        placeholder="ENTER VALUE"
                        value={textthree}
                        onChangeText={setTextThree}
                        keyboardType="default"
                        style={styles.maiaDropDownView}

                    />
                    <View style={styles.dropdownView}>
                        <Dropdown
                            style={styles.dropdown}
                            containerStyle={styles.shadow}
                            data={propertyDetail?.mesurementUnits}
                            labelField="name"
                            valueField="name"
                            label="Dropdown"
                            placeholder="Sq.Ft"
                            placeholderStyle={{ color: '#6A6A6A' }}
                            value={dropdownone}
                            onChange={item => {
                                setDropdownOne(item.name);
                                console.log('selected', item);
                            }}
                            renderLeftIcon={() => (
                                <Image style={styles.iconTwo} source={require('../../Assest/images/downArrow.png')} />
                            )}
                            // renderItem={item => _renderItem(item)}
                            textError="Error"
                        />
                    </View>
                </View>
            </View>
        )
    }

    const CityInputText = () => {
        return (
            <View>
                <View style={styles.cityView}>
                    <Text style={styles.cityText}> City</Text>
                </View>
                <AppInput
                    placeholder={'Ahmedabad'}
                    rightIcon={imagePath.location}
                />
                <View style={styles.appartmentView}>
                    <Text style={styles.appartmentText}>
                        Appartment / Society
                    </Text>
                </View>
                <AppInput

                />
                <View style={styles.appartmentView}>
                    <Text style={styles.appartmentText}>
                        Locality
                    </Text>
                </View>
                <AppInput

                />
                <View style={styles.appartmentView}>
                    <Text style={styles.appartmentText}>
                        House / Block No
                    </Text>

                </View>
                <AppInput
                    marginBottom={0}
                />
            </View>
        )
    }
    const expectedPrice = () => {
        return (
            <View>
                <View style={styles.expectedView}>
                    <Text style={styles.expectedText}>
                        Expected Price
                    </Text>
                </View>
                <AppInput
                    placeholder={'Expected price'}
                    // marginTop={10}
                    marginHorizontal={30}
                />
            </View>
        )
    }
    const Price = () => {
        return (
            <View>
                <View style={styles.priceView}>
                    <Text style={styles.expectedText}>
                        Price
                    </Text>
                </View>
                <AppInput
                    placeholder={'Price per acres'}
                    //marginTop={10}
                    marginHorizontal={30}
                />
            </View>
        )
    }
    const Pricenegotiable = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 20, margintop: 20 }}>
                    {persons.map((personData, index) => {
                        return (
                            <View key={index} style={{ bottom: 20 }}>
                                <TouchableOpacity
                                    onPress={() => setTenantChecked(index)}>
                                    <View style={{
                                        borderColor: "#2B9330",
                                        borderWidth: 2,
                                        borderRadius: 2,
                                        alignItems: "center",
                                        justifyContent: 'center',
                                        height: 24, width: 24, marginLeft: 0, bottom: 1, borderRadius: 5, backgroundColor:
                                            tenantChecked == index ? '#2B9330' : '#fff'
                                    }}>
                                        {tenantChecked == index
                                            ? (<Image style={{ width: 16, height: 16 }}
                                                source={imagePath.right}
                                                resizeMode={'contain'}
                                            />)
                                            : null}




                                    </View>
                                    <Text style={styles.item}>{personData.name}</Text>
                                </TouchableOpacity>

                            </View>
                        );
                    })}
                </View>
            </View>
        )
    }
    const Uploadimage = () => {

        const removeItem = (id) => {
            const ImageDelete = images.filter((i) =>
                console.log(i.uri != id),)
            setImages(ImageDelete)
            console.log("picker Image", ImageDelete);
            //setImages(images.filter((i) => i.uri == id))
            // alert(id)
        }
        return (
            <View style={{}}>
                <View style={styles.uploadView}>
                    <Text style={styles.uploadText}>
                        Upload Photo
                    </Text>
                </View>


                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => {
                            console.log('Modal has been closed.');
                        }}>
                        <View style={styles.centered_View}>
                            <View style={styles.modal_View}>
                                <View style={styles.modal}>
                                    <FlatList
                                        ItemSeparatorComponent={<View style={styles.underlineStyle}></View>}
                                        data={flatListData}
                                        renderItem={({ item, index }) => {
                                            return (

                                                <TouchableOpacity onPress={() => {
                                                    if (item.id == 1) {
                                                        captureImage('photo')
                                                    }
                                                    else if (item.id == 2) {
                                                        chooseFile('photo')
                                                    }
                                                    else if (item.id == 3) {
                                                        setShowModal(!showModal);

                                                    }
                                                }}>

                                                    <View style={{}}>
                                                        <Text style={[{
                                                            color: item.id == 4 ? '#909090'
                                                                : item.id == 3 ? 'red'
                                                                    : '#2a9df4',

                                                            // color: item.id == 3 ? 'red' : '#2a9df4',

                                                        }, styles.cameraStyle]}>
                                                            {item.title}
                                                        </Text>

                                                    </View>

                                                </TouchableOpacity>

                                            );
                                        }}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>


                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ bottom: 10 }}>
                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: 10,
                            justifyContent: 'space-between',


                        }}>

                            <TouchableOpacity activeOpacity={0.5}
                                style={{

                                }}
                                onPress={() => {
                                    setShowModal(!showModal);
                                }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }} activeOpacity={0.8}>
                                    <Image source={imagePath.palesh} style={styles.oneImage} />
                                    <Image source={imagePath.border_Image} style={styles.border_Image} />
                                    <Image source={imagePath.uploadImage} style={{}} />
                                </View>
                            </TouchableOpacity>

                            <View>

                                {filePath && (
                                    <Image source={{ uri: filePath?.assets[0]?.uri }}
                                        style={{ height: 149, width: 160, borderRadius: 14 }}
                                    />

                                )}
                            </View>
                            <View style={{ flexDirection: 'row' }}>


                                {images.map((modalData, index) => {
                                    return (
                                        <View key={index} style={{ marginHorizontal: 10 }}>
                                            <Image
                                                source={{ uri: modalData.uri }}
                                                style={{ height: 149, width: 160, borderRadius: 14 }}
                                            />
                                            <View style={{ position: 'absolute', right: 5, top: 5 }}>
                                                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                                    removeItem(modalData.fileName)
                                                }}  >
                                                    <Image source={imagePath.cancleButton} style={{ height: 20, width: 20, tintColor: 'red' }} />

                                                </TouchableOpacity>
                                            </View>


                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>

                </View >
            </View >
        )
    }

    const renderBrands = ({ item, index }) => {

        const { title, name } = item;
        const isSelected = selectedBrands.filter((i) => i === title).length > 0;
        return (

            <TouchableOpacity onPress={() => {
                if (isSelected) {
                    setSelectedBrands((prev) => prev.filter((i) => i !== title));
                } else {
                    setSelectedBrands(prev => [...prev, title])
                }
            }}

                style={{
                    backgroundColor: isSelected ? '#2b9330' : "#E1FEE3", alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 3,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    marginTop: 10
                }}>
                <View style={{

                }}>

                    <Text style={{ color: isSelected ? "#fdfbfb" : "#6A6A6A", fontSize: 16 }}>{title}</Text>
                </View>
            </TouchableOpacity>

        )
    };

    const InputBox = () => {
        return (
            <View>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText}>Description</Text>
                </View>
                <AppInput
                    marginTop={30}
                    marginHorizontal={30}
                />
                {chechdata == 3 ?
                    (<AppButton
                        bttName={'Post Property'}
                        marginTop={-30}
                        onPress={() => props.navigation.goBack()}

                    />

                    ) : null}
            </View>
        )
    }
    const rightSideComponent = (props) => {
        return (
            <View style={{}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate('Add_propertyDetail')
                }}>
                    <Image source={imagePath.Group_6} style={styles.rightHeader} />
                </TouchableOpacity>

            </View>
        )
    }
    const NextButton = () => {
        return (
            <AppButton
                bttName={"Next"}
                marginBottom={50}
                onPress={() => setCheckData(chechdata + 1)}
            />
        )
    }
    return (
        <>

            <View style={styles.container}>

                <Header
                    title={" MyPropertyList"}
                    leftComponent={() => leftsideComponent()}
                    rightComponent={() => rightSideComponent()}

                />
                <ScrollView >

                    {showComponent()}
                    {chechdata == 1 ? <>
                        {PropertyFor()}


                        {PropertyType()}
                        {NoOfBedRoom()}
                        {NoOfBalconies()}
                        {AvaibilityStatus()}
                        {Furnishing()}

                        <View style={{ marginHorizontal: 20, marginTop: 10, }}>
                            <Text style={{ fontSize: 20, color: '#000' }}>
                                Ammenities
                            </Text>
                        </View>
                        <FlatList style={{ marginTop: 10, marginHorizontal: 15 }}
                            data={DATAList}
                            renderItem={renderBrands}
                            numColumns={3}
                            horizontal={false}
                        />
                        {PropertyAge()}

                    </> : null}
                    {chechdata == 2 ? <>
                        {CarpetArea()}
                        {builtUpArea()}
                        {DropdownScreen()}
                        {CityInputText()}
                    </> : null}
                    {chechdata == 3 ? <>
                        {expectedPrice()}
                        {Price()}
                        {Pricenegotiable()}
                        {Uploadimage()}
                        {InputBox()}
                    </> : null}

                    {chechdata != 3 && NextButton()}




                </ScrollView>
            </View>
        </>
    );
}
export default Add_propertyDetail
