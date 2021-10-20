import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white',
    marginHorizontal: wp('4%'),
    
  },
  underContainer: { 
    flexDirection: 'row', 
    marginHorizontal: wp('4%'),
    marginTop: hp('2%'),
    width: wp('80%'),
    alignSelf: 'center'
  },
  profileImage: {
    borderRadius: 30, 
    height: 60, 
    width: 60, 
    borderColor: '#ffffff',
    alignSelf: 'flex-start',
  },
  infoView: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    width: wp('58%'),
    justifyContent: 'space-between'
  },
  infoBelowView: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: hp('3%'),
    width: wp('58%'),
    justifyContent: 'space-between'
  },
  nameTxt: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold'
  },
  dateTxt: {
    fontSize: 11,
    color: '#000000',
    marginTop: hp('0.5%')
  },
  numberTxt: {
    fontSize: 12,
    color: '#000000',

  }
});

export default styles;