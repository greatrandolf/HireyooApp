import { createAsyncThunk } from '@reduxjs/toolkit';
import { completeInvitation } from '@hireyoo/features';
import { signedIn, type AuthUser } from '@hireyoo/redux';

import { mapFirebaseUser } from './mapFirebaseUser';

export type AcceptInvitationArgs = {
  email: string;
  link: string;
  displayName: string;
  password: string;
};

export type AcceptInvitationResult = {
  user: AuthUser;
  token: string;
};

export const acceptInvitationThunk = createAsyncThunk<
  AcceptInvitationResult,
  AcceptInvitationArgs
>('auth/acceptInvitation', async ({ email, link, displayName, password }, { dispatch }) => {
  const credential = await completeInvitation({ email, link, displayName, password });
  const token = await credential.user.getIdToken();
  const user = mapFirebaseUser(credential.user);

  dispatch(signedIn({ user, token }));

  return { user, token };
});
