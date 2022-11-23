import { BASE_URL } from '@env';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <WebView source={{ uri: BASE_URL }} allowsBackForwardNavigationGestures />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
