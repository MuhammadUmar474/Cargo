import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './Styles';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SendDeliveryRequest = ({navigation}) => {

    const [ date, setDate] = useState(new Date())
    const [ size, setSize ] = useState();
    const [ weight, setWeight ] = useState();
    const [ pickupLocation, setPickUpLocation ] = useState();
    const [ dropLocation, setDropLocation ] = useState();
    const [ name, setName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ paymentMethod, setPaymentMethod ] = useState();
    const [isSelected, setSelection] = useState(false);
    const [ description, setDescription ] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity style={styles.backBtn} onPress={() => {navigation.navigate('Home')}}>
                        <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
                </TouchableOpacity>
                <Text style={styles.deliveryTxt}>SEND DELIVERY REQUEST</Text>
            </View>

            <ScrollView style={styles.underTopView} showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

                    <View style={{marginTop: hp('2%'), marginLeft: wp('2%'), width: wp('35%')}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.objTxt}>SIZE</Text>
                            <View style={{flexDirection: 'row'}}>
                            <Text style={styles.smallobjectTxt}>Foot</Text>
                            <FontAwesome name="sort-desc" style={{marginTop: hp('0.3%'), marginLeft: wp('0.5%')}}/>
                            </View>
                        </View>
                        <View style={styles.inputBoxView}>
                            <TextInput 
                            placeholder="Enter Size"
                            value={size}
                            onChange={setSize}
                            style={{alignSelf: 'center', color: '#D2D2D2'}}
                            />
                        </View>
                    </View>

                    <View style={{marginTop: hp('2%'), marginLeft: wp('2%'), width: wp('35%')}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.objTxt}>WEIGHT</Text>
                            <View style={{flexDirection: 'row'}}>
                            <Text style={styles.smallobjectTxt}>Kg</Text>
                            <FontAwesome name="sort-desc" style={{marginTop: hp('0.3%'), marginLeft: wp('0.5%')}}/>
                            </View>
                        </View>
                        <View style={styles.inputBoxView}>
                            <TextInput 
                            placeholder="Enter Size"
                            value={weight}
                            onChange={setWeight}
                            style={{alignSelf: 'center', color: '#D2D2D2'}}
                            />
                        </View>
                    </View>
                </View>

                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.locationTxt}>ENTER PICK UP LOCATION</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.locationView}>
                        <TextInput 
                                placeholder="Type Here"
                                value={pickupLocation}
                                onChange={setPickUpLocation}
                                style={{alignSelf: 'flex-start', marginLeft: wp('2%'), color: '#D2D2D2'}}
                                />
                        </View>
                        <View style={styles.locationIcon}>
                        <FontAwesome name="map-pin" size={20} style={{color: '#ABABAB'}}/>
                        </View>
                    </View>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.pickUpTxt}>  ENTER PICK UP TIME</Text>
                    <View style={{marginTop: hp('3%'), bottom: 10}}>
                    <DatePicker
                        style={{height: hp('12%')}}
                        date={date}
                        onDateChange={setDate}
                    />
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: hp('1%'), alignSelf: 'center'}}>
                <CheckBox
                    
                    disabled={false}
                    value={isSelected}
                    onValueChange={(newValue) => setSelection(newValue)}
                />
                <Text style={styles.checkTxt}>As Soon As Possible</Text>
                </View>
                
                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.locationTxt}>ENTER DELIVERY LOCATION</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.locationView}>
                        <TextInput 
                                placeholder="Type Here"
                                value={dropLocation}
                                onChange={setDropLocation}
                                style={{alignSelf: 'flex-start', marginLeft: wp('2%'), color: '#D2D2D2', padding: 5}}
                                />
                        </View>
                        <View style={styles.locationIcon}>
                        <FontAwesome name="map-pin" size={20} style={{color: '#ABABAB'}}/>
                        </View>
                    </View>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.locationTxt}>ENTER RECIPIENT DETAILS</Text>
                    <View style={styles.recipientView}>
                        <TextInput 
                            placeholder="Recipient name"
                            value={name}
                            onChange={setName}
                            style={{alignSelf: 'flex-start', marginLeft: wp('2%'), color: '#D2D2D2', padding: 5}}
                        />
                    </View>

                    <View style={styles.recipientView}>
                        <TextInput 
                            placeholder="Phone Number"
                            value={phone}
                            onChange={setPhone}
                            style={{alignSelf: 'flex-start', marginLeft: wp('2%'), color: '#D2D2D2', padding: 5}}
                        />
                    </View>
                </View>

                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.locationTxt}>ENTER DESCRIPTION</Text>
                    <View style={styles.descriptionView}>
                    <TextInput
                    placeholder="Type Here"
                    value={description}
                    onChange={setDescription}/>
                    </View>
                </View>

                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.locationTxt}>SELECT PAYMENT METHOD</Text>
                    <View style={styles.recipientView}>
                    <Picker
                        style={{bottom:12}}
                        selectedValue={paymentMethod}
                        onValueChange={(itemValue, itemIndex) => setPaymentMethod(itemValue)}>
                        <Picker.Item label="Credit Card" value="" />
                        <Picker.Item label="Master Card" value="Master Card" />
                        <Picker.Item label="Visa Card" value="Visa Card" />
                    </Picker>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: hp('1%'), alignSelf: 'center'}}>
                <CheckBox
                    
                    disabled={false}
                    value={isSelected}
                    onValueChange={(newValue) => setSelection(newValue)}
                />
                <Text style={styles.checkTxt1}>By continuing, you agree to accept our Privacy Policy & {'\n'}Terms of Service.</Text>
                </View>

                <TouchableOpacity style={styles.btncontinue} onPress={() => {navigation.navigate('Select Bid')}}>
                    <Text style={styles.continueBtnTxt}>CONTINUE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default SendDeliveryRequest;
