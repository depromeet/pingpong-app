/* eslint-disable import/no-unresolved */
import { TEST_URL } from '@env';
import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return <WebView source={{ uri: TEST_URL }} />;
};

export default App;
