import React from 'react';
import {Image, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BidderSignUpScreen from '../screens/SignUpAsBidder/BidderSignUpScreen';
import SellerSignUpScreen from '../screens/SignUpAsSeller/SellerSignUpScreen';
import BidderLoginScreen from '../screens/LoginAsBidder/BidderLoginScreen';
import SellerLoginScreen from '../screens/LoginAsSeller/SellerLoginScreen';
import LoginStart from '../screens/LoginStart/LoginStart';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Otp from '../screens/Otp/Otp';
import Home from '../screens/Home/Home';
import Registration from '../screens/Registration/Registration';
import Orders from '../screens/Orders/Orders';
import Help from '../screens/Help/Help';
import Profile from '../screens/Profile/Profile';
import Notification from '../screens/Notification/Notification.js'
import SendDeliveryRequest from '../screens/SendDeliveryRequest/SendDeliveryRequest';
import SelectBid from '../screens/SelectBids/SelectBids';
import SelectBidDetail from '../screens/SelectBidDetail/SelectBidDetail';
import Chat from '../screens/Chat/Chat';
import { DrawerContent } from './drawerContent';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const HelpStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AuthScreen() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login start"
          component={LoginStart}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Sign up"
          component={BidderSignUpScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Sign up Seller"
          component={SellerSignUpScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Log in"
          component={BidderLoginScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Log in Seller"
          component={SellerLoginScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Change password"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Forgot password"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        
      </AuthStack.Navigator>
    );
  }

  function HelpScreen(){
    return(
    <HelpStack.Navigator>
      <AuthStack.Screen
          name="Help"
          component={Help}
          options={{headerShown: false}}
      />
      <AuthStack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
      />
    </HelpStack.Navigator>
    )
  }

  function OrderScreen(){
    return(
    <HelpStack.Navigator>
      <AuthStack.Screen
          name="Delivery Request"
          component={SendDeliveryRequest}
          options={{headerShown: false}}
      />
      <AuthStack.Screen
          name="Select Bid"
          component={SelectBid}
          options={{headerShown: false}}
      />
      <AuthStack.Screen
          name="Select Bid Detail"
          component={SelectBidDetail}
          options={{headerShown: false}}
      />
      <AuthStack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
      />
    </HelpStack.Navigator>
    )
  }

  function DrawerScreen(){
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} />}
      drawerStyle={{
        backgroundColor: '#123C64',
        width: WP('80%'),
      }}
      drawerContentOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
        labelStyle: {
          fontSize: 20,
        },
      }}
      initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        {/* <Drawer.Screen name="My Profile" component={Home}/>
        <Drawer.Screen name="History" component={Home}/>
        <Drawer.Screen name="My Wallet" component={Home}/>
        <Drawer.Screen name="Message Center" component={Chat}/>
        <Drawer.Screen name="Help" component={Help}/> */}
        
      </Drawer.Navigator>
    )
  }

  function ScreenTabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {paddingVertical: Platform.OS === 'android' ? WP(2) : 0},
          activeTintColor: '#FF8137',
          inactiveTintColor: '#E6E6E6',

          style: {
            backgroundColor: '#123C64',
            borderTopWidth: 0,
            shadowOffset: {width: 5, height: 3},
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,
            height: WP(15),
            zIndex: 1,
            alignItems: 'center',
          },
        }}>
          <Tab.Screen
          name="DrawerHome"
          component={DrawerScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'home'}
                size={24}
                color={focused ? '#FF8137' : '#E6E6E6'}
              />
            ),
          }}
          />

          <Tab.Screen
          name="Orders"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source = {require('../assets/images/Order2.png')}
                size={24}
                color={focused ? '#FF8137' : '#E6E6E6'}
              />
            ),
          }}
          />

          <Tab.Screen
          name="Help tab"
          component={HelpScreen}
          options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'question-circle'}
                size={24}
                color={focused ? '#FF8137' : '#E6E6E6'}
              />
            ),
          }}
          />

          <Tab.Screen
          name="My Profile"
          component={Profile}
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'user'}
                size={24}
                color={focused ? '#FF8137' : '#E6E6E6'}
              />
            ),
          }}
          />

        </Tab.Navigator>
    )
  }

  function RouteNavigation () {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                name="Main"
                component={AuthScreen}
                options={{headerShown: false}}
                />
                <MainStack.Screen
                name="Tabs"
                component={ScreenTabs}
                options={{headerShown: false}}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
  };
  
  export default RouteNavigation;