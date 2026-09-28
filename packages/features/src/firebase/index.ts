export { firebaseApp } from './config';
export {
  firebaseAuth,
  signInWithEmail,
  signOutUser,
  sendInvitationLink,
  isInvitationLink,
  completeInvitation,
} from './auth';
export type { CompleteInvitationArgs } from './auth';
