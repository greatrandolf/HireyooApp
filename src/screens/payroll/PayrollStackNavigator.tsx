import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PayRunsScreen from './PayRunsScreen';
import PayStubsScreen from './PayStubsScreen';
import type { PayrollStackParamList } from '../../navigation/types';

const Stack = createNativeStackNavigator<PayrollStackParamList>();

export default function PayrollStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PayRuns" component={PayRunsScreen} options={{ title: 'Pay Runs' }} />
      <Stack.Screen name="PayStubs" component={PayStubsScreen} options={{ title: 'Pay Stubs' }} />
    </Stack.Navigator>
  );
}
