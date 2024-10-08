import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Dimensions, BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import HomeScreen from './Home.js';
import CameraScreen from './Camera.js';
import ListScreen from './List.js';
import MypageScreen from './Mypage.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name = "HomeScreen" component={HomeScreen}/>
          <Tab.Screen name = "ListScreen" component={ListScreen}/>
          <Tab.Screen name = "CameraScreen" component={CameraScreen}/>
          <Tab.Screen name = "MypageScreen" component={MypageScreen}/>          
        </Tab.Navigator>
      </NavigationContainer>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});