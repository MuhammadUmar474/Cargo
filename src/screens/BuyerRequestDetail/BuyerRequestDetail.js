import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Bnb from '../../components/BidorBuyerRequest/BnB';

const BuyerRequestDetail = () => {
    return (
        <View style={styles.container}>

            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
                <Text style={styles.DetailTxt}>Detail</Text>
            </View>

            <ScrollView style={{alignSelf: 'center'}} showsVerticalScrollIndicator={false}>

                <View style={styles.detailInfoView}>
                    <View>
                    <Bnb name="Roger Woodkin" date="01/10/1994" number="090078601" order="York"/>
                    </View>

                    <View style = {styles.parcelInfoView}>
                        <Text style={styles.parcelTxt}>Size</Text>
                        <Text style={styles.parcelTxt}>Weight</Text>
                        <Text style={styles.parcelTxt}>Parcel Type</Text>
                        <Text style={styles.parcelTxt}>Pic</Text>
                        <Text style={styles.parcelTxt}>Place</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('2%')}}>
                        <View>
                            <View style={styles.circleView}>
                                <FontAwesome name="comment-o" size={20} style={{marginTop: hp('1.3%')}} />
                            </View>
                            <Text style={styles.chatTxt}>Chat</Text>
                        </View>

                        <View>
                            <View style={styles.circleView}>
                                <FontAwesome name="phone" size={20} style={{marginTop: hp('1.3%')}} />
                            </View>
                            <Text style={styles.callTxt}>Call</Text>
                        </View>

                        <View>
                            <View style={styles.circleView}>
                                <FontAwesome name="times" size={20} style={{marginTop: hp('1.3%')}} />
                            </View>
                            <Text style={styles.cancelTxt}>Cancel</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonSend} onPress ={() => navigation.navigate('Tabs')}>
                        <Text style={styles.sendBtnTxt}>Send Offer</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default BuyerRequestDetail;
