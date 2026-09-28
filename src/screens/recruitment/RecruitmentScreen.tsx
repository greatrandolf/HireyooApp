import { useAppSelector } from '@hireyoo/redux';
import { Card, Text } from '@hireyoo/ui';
import { FlatList, StyleSheet, View } from 'react-native';

import { jobs } from '../../data/jobs';

export default function RecruitmentScreen() {
  const applications = useAppSelector((state) =>
    state.transactions.items.filter((item) => item.status === 'applied')
  );

  if (applications.length === 0) {
    return (
      <View style={styles.empty}>
        <Text variant="caption">You haven't applied to any jobs yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.list}
      data={applications}
      keyExtractor={(item) => item.jobId}
      renderItem={({ item }) => {
        const job = jobs.find((j) => j.id === item.jobId);
        return (
          <Card>
            <Text variant="body" style={styles.title}>
              {job?.title ?? 'Unknown role'}
            </Text>
            <Text variant="caption">{job?.company}</Text>
            <Text variant="caption">
              Applied {new Date(item.appliedAt).toLocaleDateString()}
            </Text>
          </Card>
        );
      }}
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
  empty: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontWeight: '600',
  },
});
