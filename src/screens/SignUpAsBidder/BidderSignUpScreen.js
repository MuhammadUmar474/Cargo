import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const BidderSignUpScreen = ({navigation}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [cnic, setCnic] = useState();
    const [address, setAddress] = useState();

    const [nameError, setNameError] = useState({error: false, msg: ''});
    const [emailError, setEmailError] = useState({error: false, msg: ''});
    const [passError, setPassError] = useState({error: false, msg: ''});
    const [confirmPassError, setConfirmPassrror] = useState({error: false, msg: ''});
    const [phoneError, setPhoneError] = useState({error: false, msg: ''});
    const [cnicError, setCnicError] = useState({error: false, msg: ''});
    const [addressError, setAddressError] = useState({error: false, msg: ''});

    const Validation = () => {

        if (!name) {
            setNameError({error: true, msg: 'Please provide name'});
            return;
        }
          
        if (!email) {
            setEmailError({
              error: true,
              msg: 'Please provide an Email address',
            });
            return;
        }
        if (!password) {
            setPassError({error: true, msg: 'Please provide a password'});
            return;
        }

        if (!confirmPassword) {
            setConfirmPassrror({error: true, msg: 'Password did not match!'});
            return;
        }

        if (!phoneNo || phoneNo.length < 11) {
            setPhoneError({error: true, msg: 'please enter a valid phone number!'});
            return;
        }

        if (!cnic) {
            setCnicError({error: true, msg: 'Please provide Cnic'});
            return;
        }
        if (!address) {
            setAddressError({error: true, msg: 'Please provide Address'});
            return;
        }
        navigation.navigate('Log in');
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn} onPress={() => {navigation.navigate('Login start')}}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.signUpTxt}>Sign Up</Text>
                <Text style={styles.underHeadingTxt}>Add your details to sign up</Text>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Full Name</Text>
                    <FormInput
                    placeholderText="Muhammad Umar"
                    value={name}
                    onchange={(type) => {
                        setName(type)
                        setNameError({error:false})}
                    }
                    />
                    {nameError.error && (
                        <Text style={styles.errMsg}>{nameError.msg}</Text>
                    )}
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Email</Text>
                    <FormInput
                    placeholderText="manaf4@gmail.com"
                    value={email}
                    onchange={(type) => {
                        setEmail(type)
                        setEmailError({error:false})}
                    }
                    />
                    {emailError.error && (
                        <Text style={styles.errMsg}>{emailError.msg}</Text>
                    )}
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Password</Text>
                    <FormInput
                    placeholderText="Must be atleast 6 characters"
                    value={password}
                    secureTextEntry={true}
                    onchange={(type) => {
                        setPassword(type)
                        setPassError({error:false})}
                    }
                    iconType={"eye"}
                    />
                    {passError.error && (
                        <Text style={styles.errMsg}>{passError.msg}</Text>
                    )}
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Confirm Password</Text>
                    <FormInput
                    placeholderText="Must be atleast 6 characters"
                    value={confirmPassword}
                    secureTextEntry={true}
                    onchange={(type) => {
                        setConfirmPassword(type)
                        setConfirmPassrror({error:false})}
                    }
                    iconType={"eye"}
                    />
                    {confirmPassError.error && (
                        <Text style={styles.errMsg}>{confirmPassError.msg}</Text>
                    )}    
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Phone no</Text>
                    <FormInput
                    placeholderText="0300-"
                    value={phoneNo}
                    onchange={(type) => {
                        setPhoneNo(type)
                        setPhoneError({error:false})}
                    }
                    keyboardType = {"numeric"}
                    />
                    {phoneError.error && (
                        <Text style={styles.errMsg}>{phoneError.msg}</Text>
                    )}
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>CNIC</Text>
                    <FormInput
                    placeholderText=""
                    value={cnic}
                    onchange={(type) => {
                        setCnic(type)
                        setCnicError({error:false})}
                    }
                    keyboardType={"numeric"}
                    />
                    {cnicError.error && (
                        <Text style={styles.errMsg}>{cnicError.msg}</Text>
                    )}
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Address</Text>
                    <FormInput
                    placeholderText=""
                    value={address}
                    onchange={(type) => {
                        setAddress(type)
                        setAddressError({error:false})}
                    }
                    />
                    {addressError.error && (
                        <Text style={styles.errMsg}>{addressError.msg}</Text>
                    )}
                </View>

                <TouchableOpacity style={styles.buttonSignUp} onPress ={() => Validation()}>
                    <Text style={styles.signUpBtnTxt}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={styles.privacyLineTxt}>By continuing, you agree to accept our {"\n"} Privacy Policy & Terms of Service.</Text>

                <Text style={styles.signUpSocialTxt}>Or Signup With:</Text>

                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                    <FontAwesome
                        style={styles.socialIconsStyle}
                        name={'facebook-square'}
                        size={40}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity >
                    <FontAwesome
                        style={styles.socialIconsStyle}
                        name={'google'}
                        size={40}
                    />
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccount}>
                    <Text style={{fontSize: 15}}>Already have account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Log in')}>
                    <Text style={styles.signInTxt}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default BidderSignUpScreen;
