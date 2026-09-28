export type FlagSeverity = 'High' | 'Medium' | 'Low';
export type FlagStatus = 'Overdue' | 'Pending' | 'Resolved';

export type RecentFlag = {
  id: string;
  severity: FlagSeverity;
  title: string;
  subtitle: string;
  module: string;
  dueDate: string;
  status: FlagStatus;
};

export const recentFlagsCount = 12;

export const recentFlags: RecentFlag[] = [
  {
    id: 'flag-1',
    severity: 'High',
    title: 'SSS contribution not remitted',
    subtitle: 'July 2026 Payroll',
    module: 'SSS',
    dueDate: 'Aug 23, 2026',
    status: 'Overdue',
  },
  {
    id: 'flag-2',
    severity: 'High',
    title: 'BIR 2550Q not filed',
    subtitle: 'Q1 2025',
    module: 'BIR',
    dueDate: 'Aug 22, 2026',
    status: 'Overdue',
  },
  {
    id: 'flag-3',
    severity: 'Medium',
    title: 'PhilHealth contribution variance',
    subtitle: 'April 2025 Payroll',
    module: 'PhilHealth',
    dueDate: 'Aug 22, 2026',
    status: 'Overdue',
  },
  {
    id: 'flag-4',
    severity: 'Low',
    title: 'Employee contract expiring',
    subtitle: 'Juan De la Cruz',
    module: 'HR',
    dueDate: 'Aug 22, 2026',
    status: 'Overdue',
  },
  {
    id: 'flag-5',
    severity: 'Low',
    title: 'Annual policy review',
    subtitle: 'Data Privacy Policy',
    module: 'Compliance',
    dueDate: 'Aug 22, 2026',
    status: 'Overdue',
  },
];

export const severityTone: Record<FlagSeverity, 'red' | 'orange' | 'green'> = {
  High: 'red',
  Medium: 'orange',
  Low: 'green',
};

export const statusTone: Record<FlagStatus, 'red' | 'orange' | 'green'> = {
  Overdue: 'red',
  Pending: 'orange',
  Resolved: 'green',
};
