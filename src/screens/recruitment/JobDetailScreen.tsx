import {
  appliedToJob,
  useAppDispatch,
  useAppSelector,
  withdrewApplication,
} from '@hireyoo/redux';
import { Button, Header, Text } from '@hireyoo/ui';
import { ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { jobs } from '../../data/jobs';
import type { RecruitmentStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RecruitmentStackParamList, 'JobDetail'>;

export default function JobDetailScreen({ route }: Props) {
  const job = jobs.find((j) => j.id === route.params.jobId);
  const dispatch = useAppDispatch();
  const hasApplied = useAppSelector((state) =>
    state.transactions.items.some(
      (item) => item.jobId === route.params.jobId && item.status === 'applied'
    )
  );

  if (!job) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Job not found.</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title={job.title} subtitle={`${job.company} · ${job.location}`} />
      <Text variant="caption">{job.type}</Text>
      <Text style={styles.description}>{job.description}</Text>
      <Button
        style={styles.button}
        label={hasApplied ? 'Withdraw Application' : 'Apply'}
        variant={hasApplied ? 'secondary' : 'primary'}
        onPress={() =>
          dispatch(
            hasApplied
              ? withdrewApplication({ jobId: job.id })
              : appliedToJob({ jobId: job.id })
          )
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  description: {
    marginTop: 12,
    lineHeight: 22,
  },
  button: {
    marginTop: 20,
  },
});
