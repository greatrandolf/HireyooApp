import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { Text } from './Text';

export type HeaderProps = ViewProps & {
  title: string;
  subtitle?: string;
};

export function Header({ title, subtitle, style, ...rest }: HeaderProps) {
  const styles = useStyles();
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text variant="title">{title}</Text>
      {subtitle ? <Text variant="caption">{subtitle}</Text> : null}
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  container: {
    gap: 2,
  },
});
