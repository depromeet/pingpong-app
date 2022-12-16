import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';

import App from './pages/App';

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent('app', () => App);
