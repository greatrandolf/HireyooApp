import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { isInvitationLink } from '@hireyoo/features';
import { acceptInvitationThunk } from '@hireyoo/query';
import { getErrorMessage, useAppDispatch } from '@hireyoo/redux';
import { Button, Header, Input, Text } from '@hireyoo/ui';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getLinkingURL } from 'expo-linking';

import type { AuthStackParamList } from '../AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'AcceptInvite'>;

export default function AcceptInvitationScreen({ route }: Props) {
  const dispatch = useAppDispatch();
  const email = route.params?.email ?? '';
  // The route only carries query params for prefilling; the raw URL (with
  // Firebase's oobCode/mode/apiKey) is what actually proves the invite is
  // genuine, so it's re-read here rather than threaded through navigation.
  const link = getLinkingURL();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isValidInvite = !!link && !!email && isInvitationLink(link);
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const canSubmit =
    isValidInvite && fullName.trim().length > 0 && password.length >= 6 && passwordsMatch;

  const handleSubmit = async () => {
    if (!canSubmit || !link) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      await dispatch(
        acceptInvitationThunk({ email, link, displayName: fullName.trim(), password })
      ).unwrap();
    } catch (error) {
      setErrorMessage(getErrorMessage(error, 'Could not create your account'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isValidInvite) {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header title="Invitation link required" />
        <Text>Open this screen from the link in your invitation email.</Text>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header title="Create your profile" subtitle={`Finish setting up ${email}`} />
      <Input
        style={styles.field}
        placeholder="Full name"
        autoCapitalize="words"
        value={fullName}
        onChangeText={setFullName}
      />
      <Input
        style={styles.field}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Input
        style={styles.field}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {password.length > 0 && confirmPassword.length > 0 && !passwordsMatch ? (
        <Text variant="caption" style={styles.error}>
          Passwords do not match
        </Text>
      ) : null}
      {errorMessage ? (
        <Text variant="caption" style={styles.error}>
          {errorMessage}
        </Text>
      ) : null}
      <Button
        style={styles.field}
        label={isSubmitting ? 'Creating account…' : 'Create account'}
        onPress={handleSubmit}
        disabled={isSubmitting || !canSubmit}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  field: {
    marginTop: 4,
  },
  error: {
    color: '#c0392b',
  },
});
