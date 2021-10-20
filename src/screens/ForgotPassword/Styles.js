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
  forgotPasswordTxt: {
    fontSize: 26,
    textAlign: 'center',
    color: '#000000',
    marginTop: hp('9%')
  },
  emailTxt: {
    marginTop: hp('3%'),
    fontSize: 22,
    alignSelf: 'center',
    color: '#000000',
  },
  userInfoTxt: {
    fontSize: 12,
    textAlign: 'left',
    color: '#000000' 
  },
  buttonSubmit: {
    width: wp('30%'),
    backgroundColor: '#123C64',
    padding: 15,
    borderRadius: 5,
    bottom: 5,
    alignSelf: 'center',
    marginTop: hp('6%'),
  },
  submitBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;