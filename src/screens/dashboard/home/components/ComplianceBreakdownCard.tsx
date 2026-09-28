import { Card, DonutChart, Text } from '@hireyoo/ui';
import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { ComplianceBreakdownItem } from '../../../../data/complianceBreakdown';

export type ComplianceBreakdownCardProps = ViewProps & {
  score: number;
  items: ComplianceBreakdownItem[];
};

export function ComplianceBreakdownCard({ score, items, style, ...rest }: ComplianceBreakdownCardProps) {
  const styles = useStyles();

  return (
    <Card style={[styles.card, style]} {...rest}>
      <Text variant="title" style={styles.title}>
        Compliant Breakdown
      </Text>
      <View style={styles.body}>
        <DonutChart
          segments={items.map((item) => ({ value: item.count, color: item.color }))}
          size={180}
          strokeWidth={30}
        >
          <Text variant="title" style={styles.scoreValue}>
            {score}%
          </Text>
          <Text variant="caption" style={styles.scoreLabel}>
            SCORE
          </Text>
        </DonutChart>
        <View style={styles.legend}>
          {items.map((item) => (
            <View key={item.id} style={styles.legendRow}>
              <View style={styles.legendLeft}>
                <View style={[styles.dot, { backgroundColor: item.color }]} />
                <Text variant="body" style={styles.legendLabel}>
                  {item.label}
                </Text>
              </View>
              <Text variant="caption" style={styles.legendValue}>
                {item.count} ({item.percent}%)
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Card>
  );
}

const useStyles = CreateResponsiveStyle({
  card: {
    gap: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  scoreValue: {
    fontSize: 24,
    color: '#1e8449',
  },
  scoreLabel: {
    fontSize: 11,
    color: '#6b6b6b',
    letterSpacing: 0.5,
  },
  legend: {
    flex: 1,
    gap: 10,
    minWidth: 160,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  legendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    fontSize: 14,
  },
  legendValue: {
    color: '#6b6b6b',
  },
});
