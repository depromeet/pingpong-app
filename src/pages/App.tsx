import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enable =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enable) {
  //     console.log('Authorization status: ', authStatus);
  //   }
  // };

  // useEffect(() => {
  //   requestUserPermission();
  // }, []);

  //Foreground
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default App;
