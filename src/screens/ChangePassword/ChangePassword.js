import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ChangePassword = ({navigation}) => {

    const [passsword, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Log in')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
            </TouchableOpacity>
                <Text style={styles.changePasswordTxt}>Change Password</Text>

                <View style={{marginTop: hp('7%')}}>
                    <Text style={styles.userInfoTxt}>New Password</Text>
                    <FormInput
                    placeholderText=""
                    value={passsword}
                    onChangeText={setPassword}
                    />
                </View>

                <View style={{marginTop: hp('3%')}}>
                    <Text style={styles.userInfoTxt}>Confirm Password</Text>
                    <FormInput
                    placeholderText=""
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    />    
                </View>

                <TouchableOpacity style={styles.buttonSubmit}>
                    <Text style={styles.submitBtnTxt}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ChangePassword;
