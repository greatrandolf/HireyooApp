import { ProgressBar, Text } from '@hireyoo/ui';
import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { ComplianceModule, getModuleProgressColor } from '../../../../data/complianceModules';

export type ComplianceModuleRowProps = ViewProps & {
  module: ComplianceModule;
};

export function ComplianceModuleRow({ module, style, ...rest }: ComplianceModuleRowProps) {
  const styles = useStyles();
  const color = getModuleProgressColor(module.percent);

  return (
    <View style={[styles.row, style]} {...rest}>
      <View style={[styles.iconBadge, { backgroundColor: module.iconBackgroundColor }]}>
        <Text variant="body">{module.icon}</Text>
      </View>
      <View style={styles.info}>
        <Text variant="bodySmall" style={styles.name}>
          {module.name}
        </Text>
        <Text variant="captionSmall">{module.description}</Text>
      </View>
      <View style={styles.progressColumn}>
        <ProgressBar value={module.percent} max={100} color={color} style={styles.progress} />
      </View>
      <Text variant="caption" style={[styles.percent, { color }]}>
        {module.percent}%
      </Text>
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    width: 120,
    gap: 2,
  },
  name: {
    fontWeight: '600',
  },
  progressColumn: {
    flex: 1,
  },
  progress: {
    height: 6,
  },
  percent: {
    width: 40,
    textAlign: 'right',
    fontWeight: '600',
  },
});
