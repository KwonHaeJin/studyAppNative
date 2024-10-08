import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StyleSheet, Dimensions, BackHandler} from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const List = () => {
  const handleSetRef = _ref => {
    webviewRef = _ref;
    };

  const onNavigationStateChange = navState => {
    webviewRef.canGoBack = navState.canGoBack;
    if (!navState.url.includes('http://172.16.1.91:3000')) {
      // 새 탭 열기
      Linking.openURL(navState.url);
      return false;
    }
  };

  const onShouldStartLoadWithRequest = event => {
      if (!event.url.includes("http://172.16.1.91:3000")) {
        Linking.openURL(event.url);
        return false;
      }
      return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={handleSetRef}
        style={styles.webview}
        source={{uri: 'http://172.16.1.91:3000'}}
        onNavigationStateChange={onNavigationStateChange}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}      />
    </SafeAreaView>

  );
};

export default List;

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