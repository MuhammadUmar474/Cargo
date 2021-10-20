import React from 'react';
import {Image, Text, View, StyleSheet, Drawer} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';

export function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ...props}
            >
            <View>
                <View style={styles.underContainerView}>
                    <Image source={require('../assets/images/Group.png')} style={styles.image}/>
                    <View style={styles.infoView}>
                        <Text style={styles.morningTxt}>Good Morning</Text>
                        <Text style={styles.nameTxt}>Azar Nemali</Text>
                    </View>
                </View>

                <View style={styles.bottomLine}/>
                
                <DrawerItem
                label= "Home"
                labelStyle={{color: '#FFFFFF', fontSize: 20, marginLeft: wp('2%'), marginTop: hp('3%')}}
                onPress= {() => {props.navigation.navigate('Home')}}
                />

                <DrawerItem 
                label= "My Profile"
                labelStyle={{color: '#FFFFFF', fontSize: 20, marginLeft: wp('2%'), marginTop: hp('-2%')}}
                onPress= {() => {props.navigation.navigate('My Profile')}}
                />

                <DrawerItem 
                label= "History"
                labelStyle={{color: '#FFFFFF', fontSize: 20, marginLeft: wp('2%'), marginTop: hp('-2%')}}
                onPress= {() => {}}
                />

                <DrawerItem 
                label= "My Wallet"
                labelStyle={{color: '#FFFFFF', fontSize: 20, marginLeft: wp('2%'), marginTop: hp('-2%')}}
                onPress= {() => {}}
                />

                <DrawerItem 
                label= "Message Center"
                labelStyle={{color: '#FFFFFF', fontSize: 20, marginLeft: wp('2%'), marginTop: hp('-2%')}}
                onPress= {() => {}}
                />

                <DrawerItem 
                label= "Help"
                labelStyle={{color: '#FFFFFF', fontSize: 20, marginLeft: wp('2%'), marginTop: hp('-2%')}}
                onPress= {() => {props.navigation.navigate('Help tab')}}
                />
                
            </View>
            </DrawerContentScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    underContainerView: {
    flexDirection: 'row',
    marginTop: hp('8%'),
    marginHorizontal: wp('8%')
    },
    image: {
    marginTop: hp('1%'),
    borderRadius: 25, 
    height: 50, 
    width: 50, 
    borderColor: '#ffffff',
    alignSelf: 'flex-start',
    },
    infoView: {
    marginTop: hp('1%'),
    marginHorizontal: wp('3%')
    },
    morningTxt: {
    fontSize: 11,
    color: '#FFFFFF',
    },
    nameTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    },
    bottomLine: { 
    marginTop: hp('3%'), 
    borderBottomColor: '#FFFFFF', 
    borderBottomWidth: 1, 
    width: wp('50%'),
    marginHorizontal: wp('8%'),
    },
})