import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profile = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
                <Text style={styles.profileTxt}>MY PROFILE</Text>
            </View>
            
            <View style={{marginTop: hp('4%')}}>
                <Image source={require('../../assets/images/Group.png')} style={styles.profileImage}/>
                <Text style={styles.gmailTxt}>Kyliemarson23@gmail.com</Text>
                <Text style={styles.numberTxt}>123 456 789 00</Text>

                <View style={{flexDirection: 'row', marginTop: hp('3%'), marginHorizontal: wp('5%'), alignSelf: 'center'}}>
                    <View style={styles.nameView}>
                        <FontAwesome name= "user" style ={styles.iconStyle} />
                        <Text style={styles.nametxt}>Kylie</Text>
                    </View>

                    <View style={styles.nameView}>
                        <FontAwesome name= "user" style ={styles.iconStyle} />
                        <Text style={styles.nametxt}>Marson</Text>
                    </View>
                </View>

                <View style={styles.birthnhomeView}>
                        <FontAwesome name= "birthday-cake" style ={styles.iconStyle} />
                        <Text style={styles.nametxt}>12 May 1999</Text>
                </View>

                <View style={styles.birthnhomeView}>
                        <FontAwesome name= "home" style ={styles.iconStyle} />
                        <Text style={styles.nametxt}>251 -E1 Johar Town</Text>
                </View>

                <TouchableOpacity style={styles.buttonUpdate} >
                    <Text style={styles.UpdateBtnTxt}>UPDATE PROFILE</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Profile;
