import { store } from '@hireyoo/redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';
import { linking } from './src/navigation/linking';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <NavigationContainer linking={linking}>
            <AppNavigator />
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
