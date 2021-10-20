import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  topView: {
    height: hp('17%'),
    backgroundColor: '#123C64'
    },
  backBtn: { 
    marginTop: hp('4%'),
    marginLeft: wp('4%'),
  },
  profileTxt: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: hp('3%')
  },
  profileImage: {
    borderRadius: 40, 
    height: 80, 
    width: 80,
    borderColor: '#ffffff',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#F3F3F3'
  },
  gmailTxt: {
    marginTop: hp('2%'),
    color: '#000000',
    alignSelf: 'center',
    fontSize: 14
  },
  numberTxt: {
    marginTop: hp('1%'),
    color: '#000000',
    alignSelf: 'center',
    fontSize: 14
  },
  nameView: {
    flexDirection: 'row',
    height: hp('5%'),
    width: wp('33%'),
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    marginHorizontal: wp('5%'),
  },
  iconStyle: {
    marginTop: hp('1.5%'),
    marginHorizontal: wp('2%')
  },
  nametxt: {
    fontSize: 14,
    color: '#000000',
    marginTop: hp('1%'),
    marginHorizontal: wp('1%')
  },
  birthnhomeView: {
    height: hp('5%'),
    width: wp('80%'),
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp('2%')
  },
  buttonUpdate: {
    width: wp('60%'),
    height: hp('7%'),
    backgroundColor: '#123C64',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('10%'),
    bottom: 5
  },
  UpdateBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;