import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: AuthUser | null;
  token: string | null;
  // 'initializing' until the persisted Firebase session (if any) has been
  // checked, so the app doesn't flash the login screen for an already
  // signed-in user on launch.
  status: 'initializing' | 'signedOut' | 'signedIn';
};

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'initializing',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedIn(state, action: PayloadAction<{ user: AuthUser; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = 'signedIn';
    },
    signedOut(state) {
      state.user = null;
      state.token = null;
      state.status = 'signedOut';
    },
  },
});

export const { signedIn, signedOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
