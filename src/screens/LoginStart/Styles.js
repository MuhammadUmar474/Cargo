import { StyleSheet, Dimensions  } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  rectangle: {
    width: windowWidth,
    height: wp('55%'),
  },
  logo: {
    height: wp('55%'),
    width: wp('55%'),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: hp('15%'),
  },
  firstLineTxt: {
    fontSize: 14,
    textAlign: 'left',
    color: '#000000',
  },
  continueTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
  },
  alreadyAccountTxt: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: wp('10%')
  },
  buttonLogin: {
    width: wp('40%'),
    backgroundColor: '#EC4816',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: wp('6%'),
    bottom: 5
  },
  logInBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  },
  userStyle: {
    backgroundColor: '#FBF7F6',
    height: wp('50%'),
    width: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: wp('4%')
  },
  userTypeTxt: {
    color: '#000000',
    fontSize: 21
  }
});

export default styles;