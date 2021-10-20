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
  notificationTxt: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  dispatchedTxt: {
    color: '#123C64',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: hp('4%')
  },
  timeTxt: {
    color: '#D2D2D2',
    fontSize: 59,
    alignSelf: 'center',
    marginTop: hp('4%')
  }
});

export default styles;