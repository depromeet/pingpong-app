import messaging from '@react-native-firebase/messaging';
import { BASE_URL } from '@env';
import { useEffect, useRef } from 'react';
import { Linking, StatusBar, StyleSheet, View } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { useAppState } from '../hooks/state';
import handleNavigate from '../utils/handleNavigate';

const HomeScreen = () => {
  const webviewRef = useRef<WebView>(null);

  const { appStateVisible } = useAppState();

  const sendUserPermission = async () => {
    const userPermission = await messaging().hasPermission();

    webviewRef.current?.postMessage(userPermission === 1 ? 'true' : 'false');
  };

  const onEventReceive = (message: WebViewMessageEvent) => {
    const { event } = JSON.parse(message.nativeEvent.data) as { event: 'setting' | 'permission' };

    switch (event) {
      case 'setting':
        Linking.openSettings();
      case 'permission':
        sendUserPermission();
    }
  };

  useEffect(() => {
    if (appStateVisible === 'active') {
      sendUserPermission();
    }
  }, [appStateVisible]);

  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#E7E7E7"/>
      <View style={styles.container}>
        <WebView
          ref={webviewRef}
          source={{ uri: BASE_URL }}
          onNavigationStateChange={handleNavigate}
          onShouldStartLoadWithRequest={handleNavigate}
          bounces={false}
          allowsBackForwardNavigationGestures
          overScrollMode="never"
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          sharedCookiesEnabled
          onMessage={onEventReceive}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

export default HomeScreen;
