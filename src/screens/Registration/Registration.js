import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Registration = ({navigation}) => {

    const [bankName, setBankName] = useState();
    const [accountName, setAccountName] = useState();
    const [accountNumber, setAccountNumber] = useState();

    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Otp')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
            </TouchableOpacity>
                <Text style={styles.registrationTxt}>Registration</Text>
                <Text style={styles.underHeadingTxt}>Add your details for Registration</Text>

                <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
                <Text style={styles.bankDetailTxt}>Bank Detail</Text>
                <Text style={{color: '#FF0000'}}>*</Text>
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Bank Name</Text>
                    <FormInput
                    placeholderText=""
                    value={bankName}
                    onChangeText={setBankName}
                    />
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Account Name</Text>
                    <FormInput
                    placeholderText=""
                    value={accountName}
                    onChangeText={setAccountName}
                    />
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Account Number</Text>
                    <FormInput
                    placeholderText=""
                    value={accountNumber}
                    onChangeText={setAccountNumber}
                    />
                </View>

                <View style={styles.bigBoxView}>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/images/Icon_awesome.png')}
                />
                <Text style={styles.uploadProfileTxt}>upload profile image</Text>
                </View>

                <View style={{flexDirection: 'row', alignSelf: 'center'}}>

                <View style={styles.smallBoxView}>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/images/Icon_awesome.png')}
                />
                <Text style={styles.uploadPasswordTxt}>upload password image</Text>
                </View>

                <View style={styles.smallBoxView}>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/images/Icon_awesome.png')}
                />
                <Text style={styles.uploadPasswordTxt}>upload Id image</Text>
                </View>

                </View>

                <TouchableOpacity style={styles.buttonDone} onPress ={() => navigation.navigate('Tabs')}>
                    <Text style={styles.DoneBtnTxt}>Done</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Registration;
