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
  bidTxt: {
    marginTop: hp('1%'),
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default styles;