import { useEffect } from 'react';
import { firebaseAuth } from '@hireyoo/features';
import { signedIn, signedOut, useAppDispatch } from '@hireyoo/redux';
import { onAuthStateChanged } from 'firebase/auth';

import { mapFirebaseUser } from './mapFirebaseUser';

// Firebase restores its persisted session (backed by SecureStore) on launch
// and fires this listener once with the result, letting the app skip the
// login screen when the user is already signed in.
export function useAuthStateListener(): void {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return onAuthStateChanged(firebaseAuth, async (firebaseUser) => {
      if (!firebaseUser) {
        dispatch(signedOut());
        return;
      }

      const token = await firebaseUser.getIdToken();
      dispatch(signedIn({ user: mapFirebaseUser(firebaseUser), token }));
    });
  }, [dispatch]);
}
