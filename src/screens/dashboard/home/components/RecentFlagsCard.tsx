import { Card, Text } from '@hireyoo/ui';
import { Pressable, ScrollView, View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { RecentFlag } from '../../../../data/recentFlags';
import { RecentFlagsRow } from './RecentFlagsRow';

export type RecentFlagsCardProps = ViewProps & {
  count: number;
  flags: RecentFlag[];
  onViewAllPress?: () => void;
  onViewFlagPress?: (flag: RecentFlag) => void;
};

const COLUMNS = [
  { key: 'severity', label: 'Severity', width: 90 },
  { key: 'description', label: 'Description', width: 220 },
  { key: 'module', label: 'Module', width: 120 },
  { key: 'dueDate', label: 'Due Date', width: 110 },
  { key: 'status', label: 'Status', width: 100 },
  { key: 'action', label: 'Action', width: 70 },
];

export function RecentFlagsCard({
  count,
  flags,
  onViewAllPress,
  onViewFlagPress,
  style,
  ...rest
}: RecentFlagsCardProps) {
  const styles = useStyles();

  return (
    <Card style={[styles.card, style]} {...rest}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text variant="title" style={styles.title}>
            Recent flags
          </Text>
          <View style={styles.countBadge}>
            <Text variant="caption" style={styles.countLabel}>
              {count}
            </Text>
          </View>
        </View>
        <Pressable onPress={onViewAllPress}>
          <Text variant="caption" style={styles.viewAll}>
            View All Flags {'>'}
          </Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            {COLUMNS.map((column) => (
              <Text key={column.key} variant="caption" style={[styles.tableHeaderLabel, { width: column.width }]}>
                {column.label}
              </Text>
            ))}
          </View>
          {flags.map((flag) => (
            <RecentFlagsRow key={flag.id} flag={flag} onViewPress={onViewFlagPress} />
          ))}
        </View>
      </ScrollView>
    </Card>
  );
}

const useStyles = CreateResponsiveStyle({
  card: {
    gap: 12,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
  },
  countBadge: {
    backgroundColor: '#fde3e3',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  countLabel: {
    color: '#c0392b',
    fontWeight: '700',
  },
  viewAll: {
    color: '#2563eb',
    fontWeight: '600',
  },
  table: {
    minWidth: 700,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  tableHeaderLabel: {
    fontWeight: '700',
    color: '#8a8c91',
  },
});
