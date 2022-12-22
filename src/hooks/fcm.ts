import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

export const useFCMToken = () => {
  const registerToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      //TODO: have to save at firebase DB?
      console.log('fcmToken', fcmToken);
    } catch (error) {
      console.log('ERROR: _updateTokenToServer');
      console.log(error);
    }
  };

  const requestUserPermission = async (): Promise<void> => {
    try {
      const authStatus = await messaging().requestPermission();
      const enable =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      // User has authorised
      if (enable) {
        console.log('Authorization status: ', authStatus);
      }
      await registerToken();
    } catch (error) {
      console.log('알람 수신 거절');
    }
  };

  useEffect(() => {
    requestUserPermission();
  }, []);
};
