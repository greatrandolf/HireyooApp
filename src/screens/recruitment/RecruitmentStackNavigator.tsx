import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JobDetailScreen from './JobDetailScreen';
import JobsListScreen from './JobsListScreen';
import RecruitmentScreen from './RecruitmentScreen';
import type { RecruitmentStackParamList } from '../../navigation/types';

const Stack = createNativeStackNavigator<RecruitmentStackParamList>();

export default function RecruitmentStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recruitment"
        component={RecruitmentScreen}
        options={{ title: 'Recruitment' }}
      />
      <Stack.Screen name="JobsList" component={JobsListScreen} options={{ title: 'Jobs' }} />
      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={{ title: 'Job Details' }}
      />
    </Stack.Navigator>
  );
}
