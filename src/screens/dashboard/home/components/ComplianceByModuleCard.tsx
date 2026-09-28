import { Card, Text } from '@hireyoo/ui';
import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { ComplianceModule } from '../../../../data/complianceModules';
import { ComplianceModuleRow } from './ComplianceModuleRow';

export type ComplianceByModuleCardProps = ViewProps & {
  modules: ComplianceModule[];
};

export function ComplianceByModuleCard({ modules, style, ...rest }: ComplianceByModuleCardProps) {
  const styles = useStyles();

  return (
    <Card style={[styles.card, style]} {...rest}>
      <View style={styles.header}>
        <Text variant="title" style={styles.title}>
          Compliance by Module
        </Text>
        <Text variant="caption">Below 75 red. 75 to 89 yellow. 90 plus green.</Text>
      </View>
      <View style={styles.list}>
        {modules.map((module) => (
          <ComplianceModuleRow key={module.id} module={module} />
        ))}
      </View>
    </Card>
  );
}

const useStyles = CreateResponsiveStyle({
  card: {
    gap: 16,
    backgroundColor: '#fff',
  },
  header: {
    gap: 2,
  },
  title: {
    fontSize: 16,
  },
  list: {
    gap: 16,
  },
});
