import * as SecureStore from 'expo-secure-store';
import type { ReactNativeAsyncStorage } from 'firebase/auth';
import { Platform } from 'react-native';

// Backs Firebase Auth's persisted session with the OS keychain (iOS Keychain /
// Android Keystore) instead of plain AsyncStorage, so the session and tokens
// are encrypted at rest. expo-secure-store has no keychain equivalent on web
// (its web implementation is a no-op stub), so web falls back to
// localStorage — the same storage Firebase's own web SDK would use anyway.
const nativeSecureStorage: ReactNativeAsyncStorage = {
  setItem: (key, value) => SecureStore.setItemAsync(key, value),
  getItem: (key) => SecureStore.getItemAsync(key),
  removeItem: (key) => SecureStore.deleteItemAsync(key),
};

const webStorage: ReactNativeAsyncStorage = {
  setItem: async (key, value) => window.localStorage.setItem(key, value),
  getItem: async (key) => window.localStorage.getItem(key),
  removeItem: async (key) => window.localStorage.removeItem(key),
};

export const secureAuthStorage: ReactNativeAsyncStorage =
  Platform.OS === 'web' ? webStorage : nativeSecureStorage;
