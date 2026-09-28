import {
  getAuth,
  initializeAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signOut,
  updatePassword,
  updateProfile,
  type ActionCodeSettings,
  type Auth,
  type UserCredential,
} from 'firebase/auth';
// firebase/auth's package.json "types" condition always resolves to its
// platform-generic auth-public.d.ts, which omits the React Native-only
// persistence helper even though the RN build exports it at runtime.
// @ts-expect-error — getReactNativePersistence exists at runtime (dist/rn) but not in these types.
import { getReactNativePersistence } from 'firebase/auth';

import { firebaseApp, getInviteRedirectUrl } from './config';
import { secureAuthStorage } from './secureStorage';

function createAuth(): Auth {
  try {
    return initializeAuth(firebaseApp, {
      persistence: getReactNativePersistence(secureAuthStorage),
    });
  } catch {
    // initializeAuth throws if it has already run for this app (e.g. Fast Refresh).
    return getAuth(firebaseApp);
  }
}

export const firebaseAuth = createAuth();

export function signInWithEmail(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
}

export function signOutUser(): Promise<void> {
  return signOut(firebaseAuth);
}

// Firebase deprecated Dynamic Links, so the invitation link's `url` must be
// an HTTPS page you host and list under Authorized domains. That page is
// responsible for redirecting into the app (hireyooapp://accept-invite)
// while preserving every query param, since the oobCode Firebase embeds is
// what proves the link's authenticity — see AcceptInvitationScreen.
export function sendInvitationLink(email: string): Promise<void> {
  const actionCodeSettings: ActionCodeSettings = {
    url: `${getInviteRedirectUrl()}?email=${encodeURIComponent(email)}`,
    handleCodeInApp: true,
  };

  return sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings);
}

export function isInvitationLink(link: string): boolean {
  return isSignInWithEmailLink(firebaseAuth, link);
}

export type CompleteInvitationArgs = {
  email: string;
  link: string;
  displayName: string;
  password: string;
};

// Firebase deliberately omits the target email from checkActionCode's
// response for EMAIL_SIGNIN codes (to prevent code/email enumeration), so
// there's no way to independently look up "which email is this link for".
// signInWithEmailLink is the API that actually validates the (email, link)
// pairing server-side — it rejects if `email` doesn't match what the code
// was issued for — which is what stops someone from taking their own valid
// invite link and swapping the email to self-register as somebody else.
// It also both verifies and creates the account in one call, so the
// password is attached afterward via updatePassword rather than through
// createUserWithEmailAndPassword (which would just fail: the account
// already exists once signInWithEmailLink succeeds).
export async function completeInvitation({
  email,
  link,
  displayName,
  password,
}: CompleteInvitationArgs): Promise<UserCredential> {
  const credential = await signInWithEmailLink(firebaseAuth, email, link);
  await updateProfile(credential.user, { displayName });
  await updatePassword(credential.user, password);
  return credential;
}
