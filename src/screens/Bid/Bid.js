import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Bid = () => {
    const [ description, setDescription ] = useState();
    const [ amount, setAmount ] = useState();
    const [ delivery, setDelivery ] = useState();
    const [ deliveryTime, setDeliveryTime ] = useState();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#FFFFFF" }}/>
            </TouchableOpacity>
                <Text style={styles.DetailTxt}>Detail</Text>
            </View>

            <View style={{ alignSelf: 'center'}}>
                <Text style={styles.descriptionTxt}>ENTER DESCRIPTION</Text>
                <View style={styles.descriptionView}>
                <TextInput
                placeholder="Type Here"
                value={description}
                onChange={setDescription}/>
                </View>

                <Text style={styles.descriptionTxt}>ENTER AMOUNT</Text>
                <View style={styles.smallInfoView}>
                <TextInput
                style={{padding:4}}
                placeholder="50$"
                value={amount}
                onChange={setAmount}/>
                </View>

                <Text style={styles.descriptionTxt}>DELIVERY</Text>
                <View style={styles.smallInfoView}>
                <Picker
                    style={{bottom:15}}
                    selectedValue={delivery}
                    onValueChange={(itemValue, itemIndex) => setDelivery(itemValue)}>
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="1 day" value="1 day" />
                </Picker>
                </View>

                <Text style={styles.descriptionTxt}>DELIVERY TIME</Text>
                <View style={styles.smallInfoView}>
                <TextInput
                style={{padding:4}}
                placeholder="2 Days"
                value={deliveryTime}
                onChange={setDeliveryTime}/>
                </View>

                <TouchableOpacity style={styles.buttonSend}>
                    <Text style={styles.sendBtnTxt}>Submit Offer</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Bid;
