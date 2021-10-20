import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Styles';

const SelectBidDetail = ({navigation}) => {
    const [ driverAddress, setDriverAddress ] = useState();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.underContainerView}>
            <Image source={require('../../assets/images/Group.png')} style={styles.image}/>
            <View style={styles.infoView}>
                <Text style={styles.nameTxt}>Maria Coleman</Text>
                <Text style={styles.numberTxt}>0900 78601</Text>
                <Text style={styles.dateTxt}>14/08/2021</Text>
            </View>
            </View>

            <View style={{alignSelf: 'center'}}>
                <Text style={styles.driverTxt}>Driver Address</Text>
                <View style={styles.adressView}>
                    <TextInput 
                    value={driverAddress}
                    onChange={setDriverAddress}/>
                </View>
                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.priceinfo}>50%</Text>
                    <Text style={styles.priceinfo}>Pick Only</Text>
                    <Text style={styles.priceinfo}>Deliver within 2 days</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonSend} onPress ={() => navigation.navigate('Chat')}>
                    <Text style={styles.sendBtnTxt}>Send Order</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default SelectBidDetail;
