import { Badge, Text } from '@hireyoo/ui';
import { Pressable, View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { RecentFlag, severityTone, statusTone } from '../../../../data/recentFlags';

export type RecentFlagsRowProps = ViewProps & {
  flag: RecentFlag;
  onViewPress?: (flag: RecentFlag) => void;
};

export function RecentFlagsRow({ flag, onViewPress, style, ...rest }: RecentFlagsRowProps) {
  const styles = useStyles();

  return (
    <View style={[styles.row, style]} {...rest}>
      <View style={styles.severityCell}>
        <Badge label={flag.severity} tone={severityTone[flag.severity]} />
      </View>
      <View style={styles.descriptionCell}>
        <Text variant="body" style={styles.title}>
          {flag.title}
        </Text>
        <Text variant="caption">{flag.subtitle}</Text>
      </View>
      <View style={styles.moduleCell}>
        <Badge label={flag.module} tone="blue" variant="outline" />
      </View>
      <View style={styles.dueDateCell}>
        <Text variant="caption">{flag.dueDate}</Text>
      </View>
      <View style={styles.statusCell}>
        <Badge label={flag.status} tone={statusTone[flag.status]} />
      </View>
      <Pressable style={styles.actionCell} onPress={() => onViewPress?.(flag)}>
        <Text variant="caption" style={styles.actionLabel}>
          View {'>'}
        </Text>
      </Pressable>
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eceef1',
  },
  severityCell: {
    width: 90,
  },
  descriptionCell: {
    width: 220,
    gap: 2,
  },
  title: {
    fontWeight: '600',
  },
  moduleCell: {
    width: 120,
  },
  dueDateCell: {
    width: 110,
  },
  statusCell: {
    width: 100,
  },
  actionCell: {
    width: 70,
  },
  actionLabel: {
    color: '#2563eb',
    fontWeight: '600',
  },
});
