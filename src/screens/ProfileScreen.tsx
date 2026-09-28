import { Header } from '@hireyoo/ui';
import { StyleSheet, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="Profile" subtitle="Manage your resume and account details." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
