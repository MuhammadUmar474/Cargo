import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  topView: {
    height: hp('8%'),
    backgroundColor: '#123C64',
    flexDirection: 'row'
    },
  backBtn: { 
    marginTop: hp('4%'),
    marginLeft: wp('4%'),
  },
  deliveryTxt: {
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: hp('4%'),
    marginLeft: wp('6%')
  },
  underTopView: {
    marginTop: hp('1%'),
    marginHorizontal: wp('4%')
  },
  objTxt: {
    fontSize: 13,
    color: '#303030'
  },
  smallobjectTxt: {
    fontSize: 10,
    color: '#000000',
    marginTop: hp('0.3%'),
  },
  inputBoxView: {
    marginTop: hp('1%'),
    width: wp('35%'),
    height: hp('6%'),
    elevation: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  locationTxt: {
    fontSize: 13,
    color: '#303030',
    marginTop: hp('3%')
  },
  pickUpTxt: {
    fontSize: 13,
    color: '#303030',
    marginTop: hp('3%'),
  },

  locationView: {
    marginTop: hp('1%'),
    width: wp('70%'),
    height: hp('6%'),
    elevation: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  recipientView: {
    marginTop: hp('1.5%'),
    width: wp('85%'),
    height: hp('5%'),
    elevation: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  locationIcon: {
    marginTop: hp('1%'),
    width: wp('15%'),
    height: hp('6%'),
    elevation: 1,
    backgroundColor: '#FFFFFF',
    marginLeft: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkTxt: {
    fontSize: 10,
    color: '#000000',
    marginTop: hp('1.5%')
  },
  checkTxt1: {
    fontSize: 10,
    color: '#000000',
    marginTop: hp('0.5%')
  },
  descriptionTxt: {
    marginTop: hp('5%'),
    fontSize: 12,
    color: '#303030',
  },
  descriptionView: {
    marginRight: wp('7%'),
    marginTop: hp('0.5%'),
    height: hp('20%'),
    width: wp('85%'),
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    elevation: 1,
    borderColor: '#DCDCDC'
  },
  btncontinue: {
    width: wp('60%'),
    height: hp('7%'),
    backgroundColor: '#123C64',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2%'),
    bottom: 4
  },
  continueBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;