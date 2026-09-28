import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { landingPageHTML } from './LandingPage/htmlContent';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: landingPageHTML }}
        style={styles.webview}
        showsVerticalScrollIndicator={false}
        javaScriptEnabled
        scalesPageToFit
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
