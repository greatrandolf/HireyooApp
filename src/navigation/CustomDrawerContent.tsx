import { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { signOutThunk } from '@hireyoo/query';
import { useAppDispatch } from '@hireyoo/redux';
import { Collapsible, Text } from '@hireyoo/ui';
import { Pressable, StyleSheet } from 'react-native';

import type {
  AccountStackParamList,
  EmployeeStackParamList,
  PayrollStackParamList,
  RecruitmentStackParamList,
  TabParamList,
} from './types';

type DrawerEntry =
  | { kind: 'tab'; label: string; tab: keyof TabParamList }
  | {
      kind: 'group';
      label: string;
      rootScreen: 'Recruitment';
      items: { label: string; screen: keyof RecruitmentStackParamList }[];
    }
  | {
      kind: 'group';
      label: string;
      rootScreen: 'Employees';
      items: { label: string; screen: keyof EmployeeStackParamList }[];
    }
  | {
      kind: 'group';
      label: string;
      rootScreen: 'Payroll';
      items: { label: string; screen: keyof PayrollStackParamList }[];
    }
  | {
      kind: 'group';
      label: string;
      rootScreen: 'Accounts';
      items: { label: string; screen: keyof AccountStackParamList }[];
    };

const drawerEntries: DrawerEntry[] = [
  { kind: 'tab', label: 'Dashboard', tab: 'Home' },
  {
    kind: 'group',
    label: 'Recruitment',
    rootScreen: 'Recruitment',
    items: [
      { label: 'Jobs', screen: 'JobsList' },
      { label: 'Recruitment', screen: 'Recruitment' },
    ],
  },
  {
    kind: 'group',
    label: 'Employees',
    rootScreen: 'Employees',
    items: [
      { label: 'Directory', screen: 'Directory' },
      { label: 'Onboarding', screen: 'Onboarding' },
    ],
  },
  {
    kind: 'group',
    label: 'Payroll',
    rootScreen: 'Payroll',
    items: [
      { label: 'Pay Runs', screen: 'PayRuns' },
      { label: 'Pay Stubs', screen: 'PayStubs' },
    ],
  },
  {
    kind: 'group',
    label: 'Accounts',
    rootScreen: 'Accounts',
    items: [
      { label: 'Customers', screen: 'Customers' },
      { label: 'Users', screen: 'Users' },
      { label: 'Invitations', screen: 'Invitations' },
    ],
  },
  { kind: 'tab', label: 'Profile', tab: 'Profile' },
];

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const dispatch = useAppDispatch();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const activeRoute = props.state.routes[props.state.index];
  const activeTabName =
    activeRoute.name === 'Dashboard' ? (getFocusedRouteNameFromRoute(activeRoute) ?? 'Home') : undefined;
  const activeRecruitmentScreen =
    activeRoute.name === 'Recruitment'
      ? (getFocusedRouteNameFromRoute(activeRoute) ?? 'Recruitment')
      : undefined;
  const activeEmployeesScreen =
    activeRoute.name === 'Employees'
      ? (getFocusedRouteNameFromRoute(activeRoute) ?? 'Directory')
      : undefined;
  const activePayrollScreen =
    activeRoute.name === 'Payroll'
      ? (getFocusedRouteNameFromRoute(activeRoute) ?? 'PayRuns')
      : undefined;
  const activeAccountScreen =
    activeRoute.name === 'Accounts'
      ? (getFocusedRouteNameFromRoute(activeRoute) ?? 'Customers')
      : undefined;

  // Single source of truth for what's selected, so a tab and a group item
  // can never both read as selected at once.
  const selectedKey =
    activeRoute.name === 'Dashboard'
      ? `tab:${activeTabName}`
      : activeRoute.name === 'Recruitment'
        ? `screen:${activeRecruitmentScreen}`
        : activeRoute.name === 'Employees'
          ? `screen:${activeEmployeesScreen}`
          : activeRoute.name === 'Payroll'
            ? `screen:${activePayrollScreen}`
            : activeRoute.name === 'Accounts'
              ? `screen:${activeAccountScreen}`
              : `screen:${activeRoute.name}`;

  const handleLogOut = async () => {
    setIsSigningOut(true);
    try {
      await dispatch(signOutThunk()).unwrap();
    } catch (error) {
      console.error('Failed to sign out', error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {drawerEntries.map((entry) => {
        if (entry.kind === 'tab') {
          const isSelected = selectedKey === `tab:${entry.tab}`;
          return (
            <Pressable
              key={entry.tab}
              style={[styles.item, isSelected && styles.itemSelected]}
              onPress={() => props.navigation.navigate('Dashboard', { screen: entry.tab })}
            >
              <Text variant="body">{entry.label}</Text>
            </Pressable>
          );
        }

        const isGroupSelected = entry.items.some(
          (item) => selectedKey === `screen:${item.screen}`
        );

        return (
          <Collapsible
            key={entry.label}
            title={entry.label}
            // selected={isGroupSelected}
            defaultExpanded={isGroupSelected}
            style={styles.collapsible}
          >
            {entry.items.map((item) => {
              const isSelected = selectedKey === `screen:${item.screen}`;
              return (
                <Pressable
                  key={item.screen}
                  style={[styles.subItem, isSelected && styles.itemSelected]}
                  onPress={() => {
                    // The group's rootScreen and its items always come from
                    // the same DrawerEntry, so this pairing is safe even
                    // though TS can't verify it across the union of groups.
                    const navigate = props.navigation.navigate as (
                      rootScreen: string,
                      params: { screen: string }
                    ) => void;
                    navigate(entry.rootScreen, { screen: item.screen });
                  }}
                >
                  <Text variant="body">{item.label}</Text>
                </Pressable>
              );
            })}
          </Collapsible>
        );
      })}
      <Pressable
        style={[styles.item, styles.logOutItem]}
        onPress={handleLogOut}
        disabled={isSigningOut}
      >
        <Text variant="body" style={styles.logOutLabel}>
          {isSigningOut ? 'Logging out…' : 'Log Out'}
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  item: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  itemSelected: {
    backgroundColor: '#f5f5f7',
  },
  collapsible: {
    marginHorizontal: 8,
    marginTop: 4,
  },
  subItem: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  logOutItem: {
    marginTop: 16,
  },
  logOutLabel: {
    color: '#c0392b',
  },
});
