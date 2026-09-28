import type { NavigatorScreenParams } from '@react-navigation/native';

export type RecruitmentStackParamList = {
  Recruitment: undefined;
  JobsList: undefined;
  JobDetail: { jobId: string };
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type AccountStackParamList = {
  Customers: undefined;
  Users: undefined;
  Invitations: undefined;
};

export type PayrollStackParamList = {
  PayRuns: undefined;
  PayStubs: undefined;
};

export type EmployeeStackParamList = {
  Directory: undefined;
  Onboarding: undefined;
};

export type RootDrawerParamList = {
  Dashboard: NavigatorScreenParams<TabParamList>;
  Recruitment: NavigatorScreenParams<RecruitmentStackParamList>;
  Employees: NavigatorScreenParams<EmployeeStackParamList>;
  Payroll: NavigatorScreenParams<PayrollStackParamList>;
  Accounts: NavigatorScreenParams<AccountStackParamList>;
};
