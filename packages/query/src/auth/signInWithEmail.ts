import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmail as signInWithEmailRequest } from '@hireyoo/features';
import { signedIn, type AuthUser } from '@hireyoo/redux';

import { mapFirebaseUser } from './mapFirebaseUser';

export type SignInWithEmailArgs = {
  email: string;
  password: string;
};

export type SignInWithEmailResult = {
  user: AuthUser;
  token: string;
};

export const signInWithEmailThunk = createAsyncThunk<
  SignInWithEmailResult,
  SignInWithEmailArgs
>('auth/signInWithEmail', async ({ email, password }, { dispatch }) => {
  const credential = await signInWithEmailRequest(email, password);
  const token = await credential.user.getIdToken();
  const user = mapFirebaseUser(credential.user);

  dispatch(signedIn({ user, token }));

  return { user, token };
});
