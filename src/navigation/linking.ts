import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

// `hireyooapp://` covers native builds and Expo Go/dev-client URLs
// (createURL resolves to whichever applies for the current runtime).
// `http://localhost:8081` lets the Expo web dev server double as the
// invitation-link landing page during local development — see
// getInviteRedirectUrl's __DEV__ fallback in
// packages/features/src/firebase/config.ts.
export const linking: LinkingOptions<Record<string, object | undefined>> = {
  prefixes: [Linking.createURL('/'), 'http://10.154.100.7:8081', 'https://10.154.100.7:8081'],
  config: {
    screens: {
      Landing: '',
      Login: 'login',
      AcceptInvite: 'accept-invite',
    },
  },
};
