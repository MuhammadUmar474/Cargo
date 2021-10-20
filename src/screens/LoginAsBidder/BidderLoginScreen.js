import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const BidderLoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [emailError, setEmailError] = useState({error: false, msg: ''});
    const [passError, setPassError] = useState({error: false, msg: ''});

    async function onGoogleButtonPress() {
        try{
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
        
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
        } catch(e) {
            console.log({e});
        }
    }

    async function onFacebookButtonPress() {
        try{
            // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['email', 'public_profile']);
        console.log('FaceBook Login Complete')
      
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
        }catch(e) {
            console.log({e});
        }  
    };

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '14350007524-1ijfv7chi8ot734ojub33gp3clmp49ie.apps.googleusercontent.com',
          });
    }, [])

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
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Sign up')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>

                <Image
                style={styles.logo}
                source={require('../../assets/images/postiex.png')} />

                <Text style={styles.logInTxt}>Login as Bidder</Text>
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
                    <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => Alert.alert('Signed in with Facebook Complete!'))}>
                    <FontAwesome
                        style={styles.socialIconsStyle}
                        name={'facebook-square'}
                        size={40}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => Alert.alert('Signed in with Google Complete!'))}>
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

export default BidderLoginScreen;
