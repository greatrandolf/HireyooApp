import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

export type CardProps = ViewProps;

export function Card({ style, children, ...rest }: CardProps) {
  const styles = useStyles();
  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f7',
    gap: 4,
  },
});
