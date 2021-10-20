import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Chat = ({navigation}) => {

    const [ msg, setMsg ] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => {navigation.navigate('Select Bid Detail')}}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
            <Image source={require('../../assets/images/Group.png')} style={styles.userImage}/>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
            <Text style={styles.nameTxt}>AZHAR NERMALI</Text>
            <FontAwesome name={"phone"} size={20} style={{ marginTop: hp('4%'), color: "#FFFFFF", marginRight: wp('4%') }}/>
            </View>
            </View>

            <ScrollView style={{alignSelf: 'center', width: wp('95%')}} showsVerticalScrollIndicator={false}>
                <Text style={styles.dayTxt}>TODAY</Text>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.userMsgView}>
                        <Text style={styles.messageTxt}>
                        Lorem Ipsum is simply dummy text of the printin
                        </Text>
                    </View>
                    <Text style={styles.timeTxt}>3:15 PM</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: hp('4%'), alignSelf: 'flex-end'}}>
                <Text style={styles.timeTxt1}>5:15 PM</Text>
                    <View style={styles.userMsgView1}>
                        <Text style={styles.messageTxt1}>
                        Lorem Ipsum is simply
                        </Text>
                    </View>
                </View>

                <View style={styles.chatView}>
                    <TextInput 
                    placeholder="Type a message"
                    value={msg}
                    onChange={setMsg}
                    style={{color: '#123C64'}}/>

                    <TouchableOpacity style={styles.buttonSend} >
                    <Text style={styles.sendBtnTxt}>Send</Text>
                    <FontAwesome name="paper-plane-o" size= {15} style={{color: '#fff'}} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Chat;
