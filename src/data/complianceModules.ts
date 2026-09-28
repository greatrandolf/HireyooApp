export type ComplianceModule = {
  id: string;
  icon: string;
  iconBackgroundColor: string;
  name: string;
  description: string;
  percent: number;
};

export const complianceModules: ComplianceModule[] = [
  {
    id: 'bir',
    icon: '🏛️',
    iconBackgroundColor: '#fde3e3',
    name: 'BIR',
    description: 'Statutory Services',
    percent: 90,
  },
  {
    id: 'sss',
    icon: '🛂',
    iconBackgroundColor: '#e3edff',
    name: 'SSS',
    description: 'Social Security Program',
    percent: 75,
  },
  {
    id: 'philhealth',
    icon: '🏥',
    iconBackgroundColor: '#dcf5e3',
    name: 'PhilHealth',
    description: 'Health Insurance',
    percent: 80,
  },
  {
    id: 'dole',
    icon: '⚖️',
    iconBackgroundColor: '#fde3e3',
    name: 'DOLE',
    description: 'Labor Standards',
    percent: 70,
  },
];

export function getModuleProgressColor(percent: number): string {
  if (percent >= 90) return '#34a853';
  if (percent >= 75) return '#e8a838';
  return '#e0433f';
}
