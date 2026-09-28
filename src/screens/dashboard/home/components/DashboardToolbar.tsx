import { Button, Text } from '@hireyoo/ui';
import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

export type DashboardToolbarProps = ViewProps & {
  breadcrumb: string[];
  period: string;
  onFilterPress?: () => void;
};

export function DashboardToolbar({ breadcrumb, period, onFilterPress, style, ...rest }: DashboardToolbarProps) {
  const styles = useStyles();

  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={styles.breadcrumb}>
        {breadcrumb.map((crumb, index) => (
          <View key={crumb} style={styles.breadcrumbItem}>
            <Text
              variant="caption"
              style={index === 0 ? styles.breadcrumbActive : styles.breadcrumbLabel}
            >
              {crumb}
            </Text>
            {index < breadcrumb.length - 1 ? (
              <Text variant="caption" style={styles.breadcrumbSeparator}>
                {'>'}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
      <View style={styles.actions}>
        <View style={styles.periodPill}>
          <Text variant="caption" style={styles.periodLabel}>
            {period}
          </Text>
        </View>
        <Button label="Filter" variant="secondary" style={styles.filterButton} onPress={onFilterPress} />
      </View>
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  breadcrumbActive: {
    color: '#2563eb',
    fontWeight: '600',
  },
  breadcrumbLabel: {
    color: '#6b6b6b',
  },
  breadcrumbSeparator: {
    color: '#a8aab0',
    marginHorizontal: 6,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  periodPill: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e1e5',
    backgroundColor: '#fff',
  },
  periodLabel: {
    color: '#1a1a1a',
    fontWeight: '600',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
});
