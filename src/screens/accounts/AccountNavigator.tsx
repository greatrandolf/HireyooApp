import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomersScreen from './CustomersScreen';
import InvitationsScreen from './InvitationsScreen';
import UsersScreen from './UsersScreen';
import type { AccountStackParamList } from '../../navigation/types';

const Stack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Customers"
        component={CustomersScreen}
        options={{ title: 'Customers' }}
      />
      <Stack.Screen name="Users" component={UsersScreen} options={{ title: 'Users' }} />
      <Stack.Screen
        name="Invitations"
        component={InvitationsScreen}
        options={{ title: 'Invitations' }}
      />
    </Stack.Navigator>
  );
}
