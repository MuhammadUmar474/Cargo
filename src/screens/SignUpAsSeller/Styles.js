import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white',
  },
  backBtn: { 
    marginTop: hp('4%'),
  },
  signUpTxt: {
    fontSize: 30,
    textAlign: 'center',
    color: '#123C64'
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
  buttonSignUp: {
    width: wp('90%'),
    backgroundColor: '#FF8137',
    padding: 15,
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  signUpBtnTxt: {
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
    marginTop: hp('2%'),
    textAlign: 'center',
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
  noAccount: {
    marginTop: hp('0.5%'),
    justifyContent: 'center',
    fontSize: 10,
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 1,
  },
  signInTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF8137',
  },
  errMsg: {
    color: 'red',
  },
});

export default styles;