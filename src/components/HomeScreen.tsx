import messaging from '@react-native-firebase/messaging';
import { BASE_URL } from '@env';
import { useEffect, useRef } from 'react';
import { Linking, StatusBar, StyleSheet, View } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const HomeScreen = () => {
  const webviewRef = useRef<WebView>(null);

  const onEventReceive = (message: WebViewMessageEvent) => {
    const event = (JSON.parse(message.nativeEvent.data) as { event: 'setting' }).event; //add if needed

    switch (event) {
      case 'setting':
        Linking.openSettings();
    }
  };

  const onEventSend = async () => {
    const userPermission = await messaging().hasPermission();

    console.log('userPermission', userPermission);

    webviewRef.current?.postMessage(
      JSON.stringify({ alarm: userPermission === 1 ? 'true' : 'false' }),
    );
  };

  useEffect(() => {
    onEventSend();
    //FIXME: dependency
  }, [messaging]);

  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <WebView
          ref={webviewRef}
          source={{ uri: BASE_URL }}
          allowsBackForwardNavigationGestures
          overScrollMode="never"
          onMessage={onEventReceive}
          onLoad={onEventSend}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30, //FIXME: replace to web margin..
  },
});

export default HomeScreen;
