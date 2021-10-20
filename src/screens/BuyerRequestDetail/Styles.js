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
  detailInfoView: {
    marginTop: hp('39%'),
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: hp('42%'),
    borderWidth: 0.5,
    elevation: 1
  },
  parcelInfoView: {
    marginTop: hp('12%'),
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    flexWrap: 'wrap',
  },

  parcelTxt: {
    fontSize: 18,
    color: '#000000',
    marginHorizontal: wp('6%')
  },
  circleView: {
    borderRadius: 20, 
    height: 40, 
    width: 40, 
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
  },
  chatTxt: {
    marginLeft: wp('1.6%'),
    fontSize: 13,
    color: '#282F39',
  },
  callTxt: {
    marginLeft: wp('2.2%'),
    fontSize: 13,
    color: '#282F39',
  },
  cancelTxt: {
    fontSize: 13,
    color: '#282F39',
  },
  buttonSend: {
    width: wp('40%'),
    backgroundColor: '#FF8137',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: hp('1.5%'),
  },
  sendBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;