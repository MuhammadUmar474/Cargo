import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white',
  },
  underContainerView: {
    flexDirection: 'row',
    marginTop: hp('8%'),
    marginHorizontal: wp('7%'),
    alignSelf: 'center'
  },
  image: {
    borderRadius: 50, 
    height: 100, 
    width: 100, 
    borderColor: '#ffffff',
    alignSelf: 'flex-start',
  },
  infoView: {
    marginTop: hp('1%'),
    marginHorizontal: wp('3%')
  },
  nameTxt: {
    fontSize: 22,
    color: '#000000',
  },
  numberTxt: {
    fontSize: 18,
    color: '#000000',
  },
  dateTxt: {
    marginTop: hp('0.5%'),
    fontSize: 15,
    color: '#000000',
  },
  driverTxt: {
    marginTop: hp('3%'),
    fontSize: 15,
    color: '#000000',
  },
  adressView: {
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
  priceinfo: {
    fontSize: 18,
    color: '#000000',
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