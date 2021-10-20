import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Payment = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topColor}/>
            <View style={{marginHorizontal: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#303030" }}/>
                    <Text style={styles.paymentTxt}>PAYMENT</Text>
            </TouchableOpacity>

            <Text style={styles.methodTxt}>SELECT PAYMENT METHOD</Text>

            <View style={styles.imagesView}>
                <Image source={require('../../assets/images/mastercard.png')} style={{width: wp('28%'), height: hp('7%'), marginTop:hp('1.5%')}} />
                <Image source={require('../../assets/images/visacard.png')} style={{width: wp('30%'), height: hp('10%')}} />
            </View>

            <View style={styles.userDetailView}>
                <View style={{marginHorizontal: wp('4%')}}>
                    <Text style={styles.cardInfo}>Name on card</Text>
                    <View style={styles.userInfo}>
                        <Text style={styles.user}>Lexy</Text>
                        <FontAwesome name={"user-o"} size={15} style={{ color: "#303030" }}/>
                    </View>
                </View>
                <View style={{marginHorizontal: wp('4%'), marginTop: hp('3%')}}>
                    <Text style={styles.cardInfo}>Card Number</Text>
                    <View style={styles.userInfo}>
                        <Text style={styles.user}>**** **** **** ****</Text>
                        <FontAwesome name={"address-card-o"} size={15} style={{ color: "#303030" }}/>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginHorizontal: wp('4%'), marginTop: hp('3%'), width: wp('30%')}}>
                    <Text style={styles.cardInfo}>Expire date</Text>
                    <View style={styles.userInfo}>
                        <Text style={styles.user}>22/6/2025</Text>
                        <FontAwesome name={"calendar-o"} size={15} style={{ color: "#303030" }}/>
                    </View>
            </View>

            <View style={{marginHorizontal: wp('4%'), marginTop: hp('3%'), width: wp('30%')}}>
                    <Text style={styles.cardInfo}>CVV</Text>
                    <View style={styles.userInfo}>
                        <Text style={styles.user}>000</Text>
                        <FontAwesome name={"lock"} size={15} style={{ color: "#303030" }}/>
                    </View>
            </View>
            </View>

            <TouchableOpacity style={styles.buttonPay}>
                    <Text style={styles.payBtnTxt}>PAY</Text>
            </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default Payment;
