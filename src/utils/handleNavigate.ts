import { Linking } from 'react-native';
import { WebViewNavigation } from 'react-native-webview';

const handleNavigate = (e: WebViewNavigation) => {
  return handleExternalLink(e);
};

const handleExternalLink = (e: WebViewNavigation) => {
  const isExternalLink = e.navigationType === 'click';

  if (!isExternalLink) return true;

  Linking.canOpenURL(e.url).then((supported) => {
    if (supported) Linking.openURL(e.url);
  });
  return false;
};

export default handleNavigate;
