import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Otp = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Log in')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
            </TouchableOpacity>

            <Text style={styles.phoneTxt}>Phone Number Verification</Text>
            <Text style={styles.otpTxt}>Enter your OTP code</Text>

            <Text style={styles.belowHeadindTxt}>       Enter the 4-digit code sent to you at {"\n"}
            +994 10 999 00 00. did you enter the correct {"\n"}
            number?</Text>

            <View style={{marginTop: hp('5%'), flexDirection: 'row', alignSelf: 'center'}}>
                <View style={styles.boxView}>
                    <Text style={styles.numberTxt}>1</Text>
                </View>

                <View style={styles.boxView}>
                    <Text style={styles.numberTxt}>4</Text>
                </View>

                <View style={styles.boxView}>
                    <Text style={styles.numberTxt}>6</Text>
                </View>

                <View style={styles.boxView}>
                    <Text style={styles.numberTxt}>*</Text>
                </View>
            </View>

            <View style={{marginTop: hp('5%'), flexDirection: 'row'}}>
                <Text style={{fontSize: 12}}>Resend Code in</Text>
                <Text style={{color: '#004AAD', fontSize: 12}}>  10 seconds</Text>
            </View>

            <TouchableOpacity style={styles.buttonVerify} onPress = {() => navigation.navigate('Registration')}>
                    <Text style={styles.verifyBtnTxt}>VERIFY</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Otp;
