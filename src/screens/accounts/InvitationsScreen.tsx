import { useState } from 'react';
import { sendInvitationThunk } from '@hireyoo/query';
import { getErrorMessage, useAppDispatch } from '@hireyoo/redux';
import { Button, Input, Text } from '@hireyoo/ui';
import { StyleSheet, View } from 'react-native';

export default function InvitationsScreen() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setSentTo(null);
    try {
      await dispatch(sendInvitationThunk({ email })).unwrap();
      setSentTo(email);
      setEmail('');
    } catch (error) {
      setErrorMessage(getErrorMessage(error, 'Could not send invitation'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="caption">Invite someone to create their profile account</Text>
      <Input
        style={styles.field}
        placeholder="Email address"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errorMessage ? (
        <Text variant="caption" style={styles.error}>
          {errorMessage}
        </Text>
      ) : null}
      {sentTo ? (
        <Text variant="caption" style={styles.success}>
          Invitation sent to {sentTo}
        </Text>
      ) : null}
      <Button
        style={styles.field}
        label={isSubmitting ? 'Sending…' : 'Send Invitation'}
        onPress={handleSubmit}
        disabled={isSubmitting || !email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    gap: 12,
  },
  field: {
    marginTop: 4,
  },
  error: {
    color: '#c0392b',
  },
  success: {
    color: '#1a7f37',
  },
});
