import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DirectoryScreen from './DirectoryScreen';
import OnboardingScreen from './OnboardingScreen';
import type { EmployeeStackParamList } from '../../navigation/types';

const Stack = createNativeStackNavigator<EmployeeStackParamList>();

export default function EmployeeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Directory" component={DirectoryScreen} options={{ title: 'Directory' }} />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ title: 'Onboarding' }}
      />
    </Stack.Navigator>
  );
}
