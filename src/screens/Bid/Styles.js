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
  DetailTxt: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  descriptionTxt: {
    marginTop: hp('3%'),
    fontSize: 13,
    color: '#303030',
    alignSelf: 'flex-start',
  },
  descriptionView: {
    marginTop: hp('0.5%'),
    height: hp('20%'),
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    elevation: 1,
    borderColor: '#DCDCDC'
  },
  smallInfoView: {
    marginTop: hp('0.5%'),
    height: hp('4%'),
    width: wp('30%'),
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    elevation: 1,
    borderColor: '#DCDCDC'
  },
  buttonSend: {
    width: wp('60%'),
    backgroundColor: '#FF8137',
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: hp('6%'),
    bottom: 5
  },
  sendBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;