import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendInvitationLink } from '@hireyoo/features';

export type SendInvitationArgs = {
  email: string;
};

export const sendInvitationThunk = createAsyncThunk<void, SendInvitationArgs>(
  'auth/sendInvitation',
  async ({ email }) => {
    await sendInvitationLink(email);
  }
);
