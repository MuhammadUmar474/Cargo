import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RouteNavigation from './src/navigation/routeNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RouteNavigation />
    </View>
  );
};
export default App;
