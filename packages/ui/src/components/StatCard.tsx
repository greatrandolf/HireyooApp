import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { Text } from './Text';

export type StatCardProps = ViewProps & {
  icon: string;
  iconBackgroundColor: string;
  label: string;
  value: string;
  progressLabel: string;
  progressValue: number;
  progressMax: number;
  progressColor: string;
};

export function StatCard({
  icon,
  iconBackgroundColor,
  label,
  value,
  progressLabel,
  progressValue,
  progressMax,
  progressColor,
  style,
  ...rest
}: StatCardProps) {
  const styles = useStyles();

  return (
    <Card style={[styles.card, style]} {...rest}>
      <View style={[styles.iconBadge, { backgroundColor: iconBackgroundColor }]}>
        <Text variant="body">{icon}</Text>
      </View>
      <Text variant="caption">{label}</Text>
      <Text variant="title" style={styles.value}>
        {value}
      </Text>
      <ProgressBar value={progressValue} max={progressMax} color={progressColor} style={styles.progress} />
      <View style={styles.footer}>
        <Text variant="caption">{progressLabel}</Text>
        <Text variant="caption">
          {progressValue}/{progressMax}
        </Text>
      </View>
    </Card>
  );
}

const useStyles = CreateResponsiveStyle({
  card: {
    gap: 8,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 28,
  },
  progress: {
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
