import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Text } from '@hireyoo/ui';
import { Asset } from 'expo-asset';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'Landing'>;

export default function LandingScreenWeb({ navigation }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [htmlContent, setHtmlContent] = useState('');

  const onNavigateToLogin = () => {
    navigation.navigate('Login')
  }

  useEffect(() => {
    async function loadAsset() {
      try {
        // 1. Resolve the module asset path
        const asset = Asset.fromModule(require('./LandingPage/index.html'));
        await asset.downloadAsync(); // Ensure it is cached locally

        // 2. Read the asset file as a string using fetch
        if (asset.localUri || asset.uri) {
          const fileUri = asset.localUri || asset.uri;
          const response = await fetch(fileUri);
          const content = await response.text();
          setHtmlContent(content);
        }
      } catch (error) {
        console.error('Error loading HTML asset:', error);
      }
    }
    loadAsset();
  }, []);

  useEffect(() => {
    if (!htmlContent || !iframeRef.current) return;

    const iframe = iframeRef.current;
    let timeoutId: NodeJS.Timeout;
    let isMounted = true;

    const attachClickHandlers = () => {
      if (!isMounted) return;

      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDoc && iframeDoc.body) {
          const buttons = iframeDoc.querySelectorAll('button.btn-primary, button.btn-secondary, .nav-cta');
          console.log(`Found ${buttons.length} buttons`);

          buttons.forEach((button: Element) => {
            button.removeAttribute('onclick');
            button.addEventListener('click', (e: Event) => {
              e.preventDefault();
              onNavigateToLogin();
            });
          });
        } else if (isMounted) {
          // Retry if not ready
          timeoutId = setTimeout(attachClickHandlers, 100);
        }
      } catch (error) {
        console.error('Error attaching click handlers:', error);
        if (isMounted) {
          timeoutId = setTimeout(attachClickHandlers, 200);
        }
      }
    };

    // Wait for srcDoc to render (it's asynchronous)
    timeoutId = setTimeout(attachClickHandlers, 400);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [htmlContent, onNavigateToLogin]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {htmlContent ? (
        <iframe
          ref={iframeRef}
          srcDoc={htmlContent}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Hireyoo Landing Page"
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading landing page...</Text>
        </View>
      )}
    </View>
  );
}
