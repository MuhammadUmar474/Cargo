import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SellerLoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [emailError, setEmailError] = useState({error: false, msg: ''});
    const [passError, setPassError] = useState({error: false, msg: ''});

    const Validation = () => {
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
        navigation.navigate('Otp');

    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Login start')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>

                <Image
                style={styles.logo}
                source={require('../../assets/images/postiex.png')} />
                <Text style={styles.logInTxt}>Login as Seller</Text>
                <Text style={styles.underHeadingTxt}>Add your details to Login</Text>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Email</Text>
                    <FormInput
                    placeholderText="manaf4@gmail.com"
                    value={email}
                    onchange={(type) => {
                        setEmail(type)
                        setEmailError({error:false})
                    }}
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
                        setPassError({error:false})
                    }}
                    iconType={"eye"}
                    />
                    {passError.error && (
                        <Text style={styles.errMsg}>{passError.msg}</Text>
                    )}
                </View>

                <TouchableOpacity style={styles.buttonSignIn} onPress = {() => Validation()}>
                    <Text style={styles.signInBtnTxt}>SIGN IN</Text>
                </TouchableOpacity>

                <Text style={styles.privacyLineTxt}>By continuing, you agree to accept our {"\n"} Privacy Policy & Terms of Service.</Text>

                <View style={styles.passwordView}>
                <TouchableOpacity style={{marginHorizontal: wp('2%')}} onPress={() => navigation.navigate('Change password')}>
                    <Text style={styles.resetPasswordTxt}>Change Password</Text>
                </TouchableOpacity>
                <Text>Or</Text>
                <TouchableOpacity style={{marginHorizontal: wp('2%')}} onPress={() => navigation.navigate('Forgot password')}>
                    <Text style={styles.resetPasswordTxt}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
                <Text style={styles.signUpSocialTxt}>Or Login With:</Text>

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

                <Text style={styles.accountChkTxt}>Don't have an account?</Text>

            </View>
            <TouchableOpacity style={styles.buttonSignUp} onPress ={() => navigation.navigate('Log in')}>
                    <Text style={styles.signUpBtnTxt}>Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default SellerLoginScreen;
