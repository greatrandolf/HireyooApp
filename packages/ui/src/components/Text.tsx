import { Text as RNText, TextProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

export type AppTextVariant = 'body' | 'bodySmall' | 'title' | 'caption' | 'captionSmall';

export type TextComponentProps = TextProps & {
  variant?: AppTextVariant;
};

export function Text({ variant = 'body', style, ...rest }: TextComponentProps) {
  const styles = useStyles();
  return <RNText style={[styles[variant], style]} {...rest} />;
}

const useStyles = CreateResponsiveStyle({
  body: {
    fontSize: 15,
    color: '#1a1a1a',
  },
  bodySmall: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  caption: {
    fontSize: 13,
    color: '#6b6b6b',
  },
  captionSmall: {
    fontSize: 12,
    color: '#6b6b6b',
  },
});
