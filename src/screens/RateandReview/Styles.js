import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  topView: {
    height: hp('11%'),
    backgroundColor: '#123C64'
    },
  backBtn: { 
    marginRight: wp('4%'),
  },
  rateTxt: {
    marginTop: hp('4%'),
    fontSize: 13,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  imageStyle: {
    borderRadius: 10, 
    height: 50, 
    width: 50, 
    borderColor: '#ffffff',
    alignSelf: 'flex-start',
  },
  nametxt: {
    color: '#303030',
    fontSize: 21,
  },
  underTopView: {
    alignItems: 'center', 
    marginTop: hp('6%'),
  },
  starContainer: {
    flexDirection: 'row', 
    marginTop: 7, 
    color: '#41BBB5'
  },
  starContainer1: {
    alignSelf: 'center',
    marginTop: 7, 
    color: '#41BBB5'
  },
  rateView: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  experienceTxt: {
    marginTop: hp('5%'),
    fontSize: 12,
    color: '#303030',
  },
  descriptionView: {
    marginTop: hp('0.5%'),
    height: hp('20%'),
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    elevation: 1,
    borderColor: '#DCDCDC'
  },
  buttonSubmit: {
    width: wp('60%'),
    height: hp('7%'),
    backgroundColor: '#123C64',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
  submitBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default styles;