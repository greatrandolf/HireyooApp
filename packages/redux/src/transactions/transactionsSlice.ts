import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// A "transaction" here is a job application record: applying to a job is the
// hiring-domain equivalent of a transaction between a candidate and a job posting.
export type ApplicationStatus = 'applied' | 'withdrawn';

export type Transaction = {
  jobId: string;
  status: ApplicationStatus;
  appliedAt: string;
};

export type TransactionsState = {
  items: Transaction[];
};

const initialState: TransactionsState = {
  items: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    appliedToJob(state, action: PayloadAction<{ jobId: string }>) {
      state.items.push({
        jobId: action.payload.jobId,
        status: 'applied',
        appliedAt: new Date().toISOString(),
      });
    },
    withdrewApplication(state, action: PayloadAction<{ jobId: string }>) {
      const transaction = state.items.find((item) => item.jobId === action.payload.jobId);
      if (transaction) {
        transaction.status = 'withdrawn';
      }
    },
  },
});

export const { appliedToJob, withdrewApplication } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
