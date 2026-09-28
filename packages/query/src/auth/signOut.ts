import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOutUser } from '@hireyoo/features';
import { signedOut } from '@hireyoo/redux';

export const signOutThunk = createAsyncThunk<void, void>(
  'auth/signOut',
  async (_, { dispatch }) => {
    await signOutUser();
    dispatch(signedOut());
  }
);
