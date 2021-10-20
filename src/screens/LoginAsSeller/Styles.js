import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  backBtn: { 
    marginTop: hp('4%'),
  },
  logInTxt: {
    fontSize: 30,
    textAlign: 'center',
    color: '#123C64',
    marginTop: hp('9%')
  },
  logo: {
    alignSelf: 'center',
    height: hp('10%'),
    width: wp('53%')
  },
  underHeadingTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: '#123C64'
  },
  userInfoTxt: {
    fontSize: 12,
    textAlign: 'left',
    color: '#000000' 
  },
  buttonSignIn: {
    width: wp('90%'),
    backgroundColor: '#123C64',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: hp('6%'),
  },
  signInBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  privacyLineTxt: {
    fontSize: 11,
    textAlign: 'center',
    color: '#000000',
    marginTop: hp('1%'),
  },
  signUpSocialTxt: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('9%'), 
    alignSelf: 'center',
    marginHorizontal: wp('8%')
  },
  passwordTxt: {
    fontSize: 15,
    
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('0.5%'),
  },
  socialIconsStyle: {
    margin: 10,
  },
  accountChkTxt: {
    justifyContent: 'center',
    fontSize: 15,
    alignSelf: 'center',
    bottom: 2,
  },
  signInTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF8137',
  },
  buttonSignUp: {
    width: wp('100%'),
    backgroundColor: '#FF8137',
    padding: 20,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  signUpBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  errMsg: {
    color: 'red',
  },
});

export default styles;