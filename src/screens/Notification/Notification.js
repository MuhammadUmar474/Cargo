import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Notification = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Help')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
                <Text style={styles.notificationTxt}>Notification</Text>
            </View>

            <Text style={styles.dispatchedTxt}>Your order has been dispatched</Text>
            <Text style={styles.timeTxt}>48:00:00</Text>
        </ScrollView>
    )
}

export default Notification;
