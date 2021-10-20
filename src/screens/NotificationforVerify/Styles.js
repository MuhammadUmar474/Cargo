import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  topView: {
    marginTop: hp('4%'),
    height: hp('15%'),
    width: wp('80%'),
    backgroundColor: '#123C64',
    alignSelf: 'center',
    alignItems: 'center',
    },
    msgTxt: {
      color: '#FFFFFF',
      fontSize: 14,
      alignSelf: 'center',
      padding: 28
    }
});

export default styles;