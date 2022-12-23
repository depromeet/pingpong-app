import { BASE_URL } from '@env';
import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <ScrollView refreshControl={<RefreshControl {...{ onRefresh, refreshing }} />}>
          <WebView
            source={{ uri: BASE_URL }}
            allowsBackForwardNavigationGestures
            overScrollMode="never"
          />
        </ScrollView>
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
