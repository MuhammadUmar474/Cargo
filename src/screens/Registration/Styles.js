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
  registrationTxt: {
    fontSize: 30,
    textAlign: 'center',
    color: '#123C64',
  },
  underHeadingTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: '#123C64',
    marginTop: hp('2%')
  },
  userInfoTxt: {
    fontSize: 12,
    textAlign: 'left',
    color: '#000000' 
  },
  bigBoxView: {
    marginTop: hp('2%'),
    height: hp('14%'),
    width: wp('70%'),
    backgroundColor: '#FBF7F6',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#E4E4E4',
    alignSelf: 'center'
  },
  smallBoxView: {
    marginTop: hp('1%'),
    height: hp('13%'),
    width: wp('35%'),
    marginHorizontal: wp('4.5%'),
    backgroundColor: '#FBF7F6',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#E4E4E4',
    alignSelf: 'center'
  },
  bankDetailTxt: {
    fontSize: 14,
    color: '#B7B6B6',
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: hp('2%')
  },
  uploadProfileTxt: {
    color: '#D1D1D1',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: hp('2%')
  },
  uploadPasswordTxt: {
    color: '#D1D1D1',
    fontSize: 10,
    alignSelf: 'center',
    marginTop: hp('1%')
  },
  buttonDone: {
    width: wp('90%'),
    backgroundColor: '#FF8137',
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    bottom: 5
  },
  DoneBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;