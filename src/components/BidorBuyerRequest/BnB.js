import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Styles';

const Bnb = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.underContainer} onPress={props.onPress}>
            <Image source={require('../../assets/images/Group.png')} style={styles.profileImage}/>
            <View style={{marginHorizontal: wp('4%'),  marginTop: hp('1.5%')}}>
                <View style={styles.infoView}>
                    <Text style={styles.nameTxt}>{props.name}</Text>
                    <Text style={styles.dateTxt}>{props.date}</Text>
                </View>

                <View style={styles.infoBelowView}>
                    <Text style={styles.numberTxt}>{props.number}</Text>
                    <Text style={styles.numberTxt}>{props.order}</Text>
                </View>
            </View>
            </Pressable>
        </View>
    )
}

export default Bnb;
