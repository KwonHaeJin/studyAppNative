import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StyleSheet, Dimensions, BackHandler} from 'react-native';
import WebView from 'react-native-webview';
import HomeScreen from './Home';
import CameraScreen from './Camera';
import ListScreen from './List';
import MypageScreen from './Mypage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
          <Tab.Navigator>
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