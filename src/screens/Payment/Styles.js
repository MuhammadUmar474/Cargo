import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  topColor: {
    height: hp('7%'),
    backgroundColor: '#123C64'
  },
  backBtn: { 
    marginTop: hp('2%'),
    flexDirection: 'row',
  },
  paymentTxt: {
    color: '#303030',
    fontSize: 13,
    marginHorizontal: wp('4%')
  },
  methodTxt: {
    marginTop: hp('6%'),
    color: '#303030',
    fontSize: 13,
    alignSelf: 'center',
  },
  imagesView: {
    marginTop: hp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  userDetailView: {
    marginTop: hp('10%'),

  },
  cardInfo: {
    color: '#AFAFAF',
    fontSize: 14,
    alignSelf: 'flex-start'
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
  },
  user: {
    fontSize: 14,
    color: '#1D2226',
  },
  buttonPay: {
    width: wp('60%'),
    backgroundColor: '#123C64',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('15%'),
    bottom: 5
  },
  payBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;