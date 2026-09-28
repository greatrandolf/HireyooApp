import { useAuthStateListener } from '@hireyoo/query';
import { useAppSelector } from '@hireyoo/redux';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import AuthNavigator from '../screens/auth/AuthNavigator';
import RootNavigator from './RootNavigator';

export default function AppNavigator() {
  useAuthStateListener();
  const status = useAppSelector((state) => state.auth.status);

  if (status === 'initializing') {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return status === 'signedIn' ? <RootNavigator /> : <AuthNavigator />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
