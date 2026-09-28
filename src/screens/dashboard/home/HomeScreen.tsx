import { StatCard } from '@hireyoo/ui';
import { ScrollView, View } from 'react-native';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

import { complianceBreakdown, complianceScore } from '../../../data/complianceBreakdown';
import { complianceModules } from '../../../data/complianceModules';
import { dashboardStats } from '../../../data/dashboardStats';
import { recentFlags, recentFlagsCount } from '../../../data/recentFlags';
import { ComplianceBreakdownCard } from './components/ComplianceBreakdownCard';
import { ComplianceByModuleCard } from './components/ComplianceByModuleCard';
import { DashboardToolbar } from './components/DashboardToolbar';
import { RecentFlagsCard } from './components/RecentFlagsCard';

export default function HomeScreen() {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <DashboardToolbar breadcrumb={['Dashboard', 'Home']} period="August 2026" />

      <View style={styles.grid}>
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            style={styles.card}
            icon={stat.icon}
            iconBackgroundColor={stat.iconBackgroundColor}
            label={stat.label}
            value={stat.value}
            progressLabel={stat.progressLabel}
            progressValue={stat.progressValue}
            progressMax={stat.progressMax}
            progressColor={stat.progressColor}
          />
        ))}
      </View>

      <View style={styles.summaryRow}>
        <ComplianceBreakdownCard
          score={complianceScore}
          items={complianceBreakdown}
          style={styles.breakdownCard}
        />
        <ComplianceByModuleCard modules={complianceModules} style={styles.moduleCard} />
      </View>

      <RecentFlagsCard style={{ width: '80%' }} count={recentFlagsCount} flags={recentFlags} />
    </ScrollView>
  );
}

//OD3956
// 0097A9
// FFFFFF
// 061A28
// F3F4F6
// E5E7EB
// EAEBEF
// 34759F
const useStyles = CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor: '#F3F4F6',
    },
    content: {
      padding: 16,
      gap: 16,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
    },
    card: {
      backgroundColor: '#FFFFFF',
      flexBasis: '100%',
    },
    summaryRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
    },
    breakdownCard: {
      flexBasis: '97%',
    },
    moduleCard: {
      flexBasis: '97%',
    },
  },
  {
    [DEVICE_SIZES.MD]: {
      card: {
        flexBasis: '47%',
      },
    },
    [DEVICE_SIZES.LG]: {
      card: {
        flexBasis: '23%',
      },
      breakdownCard: {
        flexBasis: '48%',
      },
      moduleCard: {
        flexBasis: '48%',
      },
    },
    [DEVICE_SIZES.XL]: {
      card: {
        flexBasis: '23%',
      },
      breakdownCard: {
        flexBasis: '47.5%',
      },
      moduleCard: {
        flexBasis: '47.5%',
      },
    },
  }
);
