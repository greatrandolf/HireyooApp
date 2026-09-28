export type DashboardStat = {
  id: string;
  icon: string;
  iconBackgroundColor: string;
  label: string;
  value: string;
  progressLabel: string;
  progressValue: number;
  progressMax: number;
  progressColor: string;
};

export const dashboardStats: DashboardStat[] = [
  {
    id: 'compliance-score',
    icon: '🛡️',
    iconBackgroundColor: '#dcf5e3',
    label: 'Compliance Score',
    value: '82%',
    progressLabel: 'Total Compliance Score',
    progressValue: 82,
    progressMax: 100,
    progressColor: '#34a853',
  },
  {
    id: 'overdue-items',
    icon: '⚠️',
    iconBackgroundColor: '#fde3e3',
    label: 'Overdue Items',
    value: '5',
    progressLabel: 'Total Overdue Items',
    progressValue: 5,
    progressMax: 20,
    progressColor: '#e0433f',
  },
  {
    id: 'upcoming-deadlines',
    icon: '📅',
    iconBackgroundColor: '#fdf1d6',
    label: 'Upcoming Deadlines',
    value: '18',
    progressLabel: 'Next 30 days',
    progressValue: 18,
    progressMax: 30,
    progressColor: '#e8a838',
  },
  {
    id: 'completed',
    icon: '✅',
    iconBackgroundColor: '#dcf5e3',
    label: 'Completed',
    value: '125',
    progressLabel: 'Completed this month',
    progressValue: 125,
    progressMax: 150,
    progressColor: '#34a853',
  },
];
