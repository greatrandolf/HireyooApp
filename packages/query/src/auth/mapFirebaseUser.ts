import type { User } from 'firebase/auth';
import type { AuthUser } from '@hireyoo/redux';

export function mapFirebaseUser(user: User): AuthUser {
  return {
    id: user.uid,
    name: user.displayName ?? user.email ?? 'User',
    email: user.email ?? '',
  };
}
