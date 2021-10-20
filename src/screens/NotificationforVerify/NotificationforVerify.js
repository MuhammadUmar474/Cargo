import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const NotificatoinforVerify = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.msgTxt}>Your account will be verify within 24 to 48 hours after that you can loging</Text>
            </View>
        </View>
    )
}

export default NotificatoinforVerify;
