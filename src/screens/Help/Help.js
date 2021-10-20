import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Help = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => {navigation.navigate('Home')}}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
                <Text style={styles.helpTxt}>HELP</Text>
            </View>

            <View style={{marginTop: hp('3%')}}>
                <Pressable style={styles.contentView} onPress={() => {navigation.navigate('Notification')}}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name={"bell-o"} size={15} style={{ color: "#000000", marginTop: hp('0.2%') }}/>
                    <Text style={styles.itemsTxt}>Notifications</Text>
                </View>
                <View>
                    <Ionicons name={"chevron-forward-outline"} size={15} style={{ color: "#A4A4A4"}}/>
                </View>
                </Pressable>

                <Pressable style={styles.contentView}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name={"newspaper-outline"} size={15} style={{ color: "#000000", marginTop: hp('0.2%') }}/>
                    <Text style={styles.itemsTxt}>Privacy Policy</Text>
                </View>
                <View>
                    <Ionicons name={"chevron-forward-outline"} size={15} style={{ color: "#A4A4A4"}}/>
                </View>
                </Pressable>

                <Pressable style={styles.contentView}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name={"call-outline"} size={15} style={{ color: "#000000", marginTop: hp('0.2%') }}/>
                    <Text style={styles.itemsTxt}>Contact Us</Text>
                </View>
                <View>
                    <Ionicons name={"chevron-forward-outline"} size={15} style={{ color: "#A4A4A4"}}/>
                </View>
                </Pressable>

                <Pressable style={styles.contentView}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name={"star-o"} size={15} style={{ color: "#000000", marginTop: hp('0.2%') }}/>
                    <Text style={styles.itemsTxt}>Rate App</Text>
                </View>
                <View>
                    <Ionicons name={"chevron-forward-outline"} size={15} style={{ color: "#A4A4A4"}}/>
                </View>
                </Pressable>

            </View>
        </ScrollView>
    )
}

export default Help;
