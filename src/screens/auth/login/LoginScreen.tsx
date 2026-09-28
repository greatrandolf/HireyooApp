import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { signInWithEmailThunk } from '@hireyoo/query';
import { getErrorMessage, useAppDispatch } from '@hireyoo/redux';
import { Button, Header, Input, Text } from '@hireyoo/ui';

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      await dispatch(signInWithEmailThunk({ email, password })).unwrap();
    } catch (error) {
      setErrorMessage(getErrorMessage(error, 'Sign in failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header title="Welcome back" subtitle="Sign in to continue" />
      <Input
        style={styles.field}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.field}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? (
        <Text variant="caption" style={styles.error}>
          {errorMessage}
        </Text>
      ) : null}
      <Button
        style={styles.field}
        label={isSubmitting ? 'Signing in…' : 'Sign In'}
        onPress={handleSubmit}
        disabled={isSubmitting || !email || !password}
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
