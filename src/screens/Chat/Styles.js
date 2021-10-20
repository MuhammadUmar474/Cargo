import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  topView: {
    height: hp('9%'),
    backgroundColor: '#123C64',
    flexDirection: 'row'
    },
  backBtn: { 
    marginTop: hp('4%'),
    marginLeft: wp('4%'),
  },
  userImage: {
    marginTop: hp('2%'),
    borderRadius: 20, 
    height: 40, 
    width: 40, 
    borderColor: '#ffffff',
    marginLeft: wp('3%')
  },
  nameTxt: {
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: hp('4%'),
    marginLeft: wp('4%')
  },
  dayTxt: {
    alignSelf: 'center',
    color: '#7F7F7F',
    fontSize: 12,
    marginTop: hp('8%')
  },
  userMsgView: {
    height: hp('10%'),
    width: wp('60%'),
    backgroundColor: '#FF8137',
    marginTop: hp('2%'),
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderTopStartRadius: 25,
  },
  userMsgView1: {
    height: hp('8%'),
    width: wp('60%'),
    backgroundColor: '#123C64',
    marginTop: hp('2%'),
    borderTopRightRadius: 25,
    borderBottomStartRadius: 25,
    borderTopStartRadius: 25,
  },
  messageTxt: {
    fontSize: 14,
    color: '#FFFFFF',
    padding: 12
  },
  messageTxt1: {
    fontSize: 14,
    color: '#FFFFFF',
    padding: 10,
    alignSelf: 'center',
    marginTop: hp('1%')
  },
  timeTxt: {
    fontSize: 10,
    color: '#282F39',
    alignSelf: 'flex-end',
    marginLeft: wp('2%')
  },
  timeTxt1: {
    fontSize: 10,
    color: '#282F39',
    alignSelf: 'flex-end',
    marginRight: wp('2%')
  },
  chatView: {
    width: wp('95%'),
    marginTop: hp('35%'),
    height: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 0.5,
    borderWidth: 0.1,
    backgroundColor: '#fff'
  },
  buttonSend: {
    width: wp('20%'),
    height: hp('5%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    backgroundColor: '#FF8137',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sendBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: wp('2%'),
    alignSelf: 'center'
  },
});

export default styles;