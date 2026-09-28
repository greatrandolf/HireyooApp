import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import HomeScreen from '../screens/dashboard/home/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import type { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // The bottom tab bar is mobile chrome; on web the drawer is the
        // primary way to switch between Home/Profile.
        tabBarStyle: Platform.OS === 'web' ? { display: 'none' } : undefined,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}
