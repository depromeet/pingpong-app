import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './components/HomeScreen';
import { useFCMToken } from './hooks/fcm';

const Stack = createNativeStackNavigator();

const App = () => {
  useFCMToken();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
