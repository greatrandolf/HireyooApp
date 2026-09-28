const path = require('path');
const dotenv = require('dotenv');

const APP_ENV = process.env.APP_ENV || 'uat';
dotenv.config({ path: path.resolve(__dirname, `configuration/env/${APP_ENV}.env`) });

const firebaseConfig = require(
  path.resolve(__dirname, `configuration/google-services/${APP_ENV}/web/google-services.json`)
);

module.exports = {
  expo: {
    name: 'HireyooApp',
    slug: 'HireyooApp',
    version: '1.0.0',
    scheme: 'hireyooapp',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: '#E6F4FE',
        foregroundImage: './assets/android-icon-foreground.png',
        backgroundImage: './assets/android-icon-background.png',
        monochromeImage: './assets/android-icon-monochrome.png',
      },
      predictiveBackGestureEnabled: false,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: ['expo-secure-store'],
    extra: {
      appEnv: APP_ENV,
      firebase: firebaseConfig,
      // HTTPS landing page that Firebase's invitation sign-in link redirects
      // to (must be listed under Firebase Console > Authentication >
      // Authorized domains). That page is responsible for bouncing into the
      // app via the `hireyooapp://accept-invite` scheme, preserving all
      // query params — see packages/features/src/firebase/auth.ts.
      inviteRedirectUrl: process.env.INVITE_REDIRECT_URL,
    },
  },
};
