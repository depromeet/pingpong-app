import messaging from '@react-native-firebase/messaging';
import { BASE_URL } from '@env';
import { useEffect, useRef } from 'react';
import { Button, Linking, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { useAppState } from '../hooks/state';
import {
  NavigationContainerRefWithCurrent,
  useNavigationContainerRef,
} from '@react-navigation/native';

const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
}) => {
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

  useEffect(() => {
    Linking.addEventListener('url', (e) => {
      const route = e.url.replace(/.*?:\/\//g, '');
      console.log('route', route);
      navigation.navigate('https://open.kakao.com/o/smNXVuWe');
    });

    // return () => {
    //   Linking.removeEventListener('https://open.kakao.com/o/smNXVuWe');
    // };
  });

  https: return (
    <>
      <StatusBar barStyle="default" />
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('pingpong://https://open.kakao.com/o/smNXVuWe')}
      />
      {/* <View style={styles.container}>
        <WebView
          ref={webviewRef}
          source={{ uri: BASE_URL }}
          allowsBackForwardNavigationGestures
          overScrollMode="never"
          onMessage={onEventReceive}
        />
      </View> */}
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
