import { Card, Text } from '@hireyoo/ui';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { jobs } from '../../data/jobs';
import type { RecruitmentStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RecruitmentStackParamList, 'JobsList'>;

export default function JobsListScreen({ navigation }: Props) {
  return (
    <FlatList
      style={styles.container}
      data={jobs}
      keyExtractor={(job) => job.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate('JobDetail', { jobId: item.id })}>
          <Card>
            <Text variant="body" style={styles.title}>
              {item.title}
            </Text>
            <Text variant="caption">
              {item.company} · {item.location}
            </Text>
            <Text variant="caption">{item.type}</Text>
          </Card>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontWeight: '600',
  },
});
