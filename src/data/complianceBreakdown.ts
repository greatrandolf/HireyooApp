export type ComplianceBreakdownItem = {
  id: string;
  label: string;
  count: number;
  percent: number;
  color: string;
};

export const complianceScore = 82;

export const complianceBreakdown: ComplianceBreakdownItem[] = [
  { id: 'compliant', label: 'Compliant', count: 125, percent: 68, color: '#34a853' },
  { id: 'at-risk', label: 'At Risk', count: 18, percent: 10, color: '#e8a838' },
  { id: 'non-compliant', label: 'Non Compliant', count: 12, percent: 7, color: '#e0433f' },
  { id: 'not-applicable', label: 'Not Applicable', count: 29, percent: 16, color: '#c7c9cd' },
];
