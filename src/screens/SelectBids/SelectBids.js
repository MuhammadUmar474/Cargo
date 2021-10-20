import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Bnb from '../../components/BidorBuyerRequest/BnB';

const SelectBids = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => {navigation.navigate('Delivery Request')}}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
                <Text style={styles.bidTxt}>Bids</Text>
            </View>

            <ScrollView style={{marginTop: hp('4%'), flex: 1}} showsVerticalScrollIndicator={false}>
                <Bnb name="Maria Coleman" date="01/10/1984" number="090078601" order="new Order" onPress={() =>navigation.navigate('Select Bid Detail')}/>
                <Bnb name="Roger Woodkin" date="01/10/1994" number="090078601" order="York" onPress={() =>navigation.navigate('Select Bid Detail')}/>
                <Bnb name="Benjamin Diaz" date="01/10/2004" number="090078601" order="Zanziba Town" onPress={() =>navigation.navigate('Select Bid Detail')}/>
                <Bnb name="Benjamin Diaz" date="01/10/2004" number="090078601" order="Zanziba Town" onPress={() =>navigation.navigate('Select Bid Detail')}/>
                <Bnb name="Benjamin Diaz" date="01/10/2004" number="090078601" order="Zanziba Town" onPress={() =>navigation.navigate('Select Bid Detail')}/>
            </ScrollView>

        </View>
    )
}

export default SelectBids;
