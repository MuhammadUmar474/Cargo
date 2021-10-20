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
  phoneTxt: {
    marginTop: hp('5%'),
    color: '#303030',
    fontSize: 12,
    textAlign: 'center',
  },
  otpTxt: {
    color: '#123C64',
    fontSize: 20,
    textAlign: 'center',
  },
  belowHeadindTxt: {
    marginTop: hp('1%'),
    fontSize: 13,
    alignSelf: 'center',
    color: '#303030',
  },
  boxView: {
    height: hp('6%'),
    width: wp('15%'),
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
    marginHorizontal: wp('4%')
  },
  numberTxt: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#BDBDBD',
    marginTop: hp('1.5%')
  },
  buttonVerify: {
    width: wp('60%'),
    backgroundColor: '#123C64',
    padding: 15,
    borderRadius: 5,
    bottom: 5,
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
  verifyBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;