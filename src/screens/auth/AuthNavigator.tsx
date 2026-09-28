import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AcceptInvitationScreen from './accept-invitation/AcceptInvitationScreen';
import LandingScreen from './landing/LandingScreen';
import LoginScreen from './login/LoginScreen';

// AcceptInvite's params come entirely from the invitation link's query
// string (email, oobCode, mode, ...) via the `linking` config in
// src/navigation/linking.ts, so any query param can land here — the screen
// itself re-reads the raw URL to verify it rather than trusting params.
export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  AcceptInvite: Record<string, string | undefined>;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AcceptInvite" component={AcceptInvitationScreen} />
    </Stack.Navigator>
  );
}
