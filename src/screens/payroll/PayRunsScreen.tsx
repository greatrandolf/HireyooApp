import { Text } from '@hireyoo/ui';
import { StyleSheet, View } from 'react-native';

export default function PayRunsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="caption">No pay runs yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
