import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import styles from './Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginStart = ({navigation}) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View>
            <Image
                style={styles.rectangle}
                source={require('../../assets/images/Rectangle.png')}
            />
            </View>

            <Image 
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            
            <View style={{marginLeft: wp('4%'), marginTop: wp('30%')}}>
                <Text style={styles.firstLineTxt}>Hello, nice to meet you!</Text>
                <Text style={styles.continueTxt}>Continues As</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: hp('4%')}}>
                <Pressable style={styles.userStyle} onPress={() => {navigation.navigate('Sign up Seller')}}>
                    <Image 
                    
                    source={require('../../assets/images/seller.png')}
                    />
                    <Text style={styles.userTypeTxt}>Seller</Text>
                </Pressable>

                <Pressable style={styles.userStyle} onPress={() => {navigation.navigate('Sign up')}}>
                    <Image 
                    source={require('../../assets/images/bidder.png')}
                    />
                    <Text style={styles.userTypeTxt}>Bidder</Text>
                </Pressable>
            </View>

            <Text style={styles.alreadyAccountTxt}>Already Have An Account ?</Text>

            <TouchableOpacity style={styles.buttonLogin} onPress ={() => navigation.navigate('Log in Seller')}>
                    <Text style={styles.logInBtnTxt}>Login</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

export default LoginStart;
