import Constants from 'expo-constants';
import { getApps, initializeApp, type FirebaseOptions } from 'firebase/app';

function getFirebaseConfig(): FirebaseOptions {
  const firebase = Constants.expoConfig?.extra?.firebase as FirebaseOptions | undefined;

  if (!firebase?.apiKey || !firebase?.projectId) {
    throw new Error(
      'Missing Firebase config: set FIREBASE_* values in configuration/env/<env>.env'
    );
  }

  return firebase;
}

export const firebaseApp = getApps()[0] ?? initializeApp(getFirebaseConfig());

// `handleCodeInApp: true` (see sendInvitationLink) makes Firebase append its
// own params (oobCode, mode, apiKey, ...) directly onto this URL rather than
// routing through a Firebase-hosted page. In dev, that means pointing it at
// the Expo web dev server makes the running app itself the landing page —
// no external hosting needed to test the flow end to end.
const DEV_INVITE_REDIRECT_URL = 'http://localhost:8081/accept-invite';

export function getInviteRedirectUrl(): string {
  const inviteRedirectUrl = Constants.expoConfig?.extra?.inviteRedirectUrl as string | undefined;

  if (inviteRedirectUrl) {
    return inviteRedirectUrl;
  }

  if (__DEV__) {
    return DEV_INVITE_REDIRECT_URL;
  }

  throw new Error(
    'Missing INVITE_REDIRECT_URL: set it in configuration/env/<env>.env before sending invitations.'
  );
}
