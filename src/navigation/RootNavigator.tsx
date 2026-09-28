import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';

import AccountNavigator from '../screens/accounts/AccountNavigator';
import EmployeeStackNavigator from '../screens/employees/EmployeeStackNavigator';
import PayrollStackNavigator from '../screens/payroll/PayrollStackNavigator';
import RecruitmentStackNavigator from '../screens/recruitment/RecruitmentStackNavigator';
import CustomDrawerContent from './CustomDrawerContent';
import DashboardTabNavigator from './DashboardTabNavigator';
import type { RootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: Platform.OS !== 'web',
        // Permanent on web since the bottom tab bar is hidden there and the
        // drawer becomes the primary way to switch between screens.
        drawerType: 'permanent',
        drawerStyle: Platform.OS === 'web' ? { width: 240 } : undefined,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={DashboardTabNavigator} options={{ title: 'Hireyoo' }} />
      {/* AccountNavigator owns its own stack headers, same as the Jobs tab. */}
      <Drawer.Screen name="Recruitment" component={RecruitmentStackNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Employees" component={EmployeeStackNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Payroll" component={PayrollStackNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Accounts" component={AccountNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
