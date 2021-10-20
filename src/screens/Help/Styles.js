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
  helpTxt: {
    marginTop: hp('2%'),
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  contentView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('6%'),
    borderRadius: 0.5,
    elevation: 1,
    marginTop: hp('0.1%'),
    alignItems: 'center',
    justifyContent: 'space-between'
    
  },
  itemsTxt: {
    fontSize: 13,
    color: '#000000',
    marginLeft: wp('2%')
  }
});

export default styles;