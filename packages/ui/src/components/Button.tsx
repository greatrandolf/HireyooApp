import { Pressable, PressableProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { Text } from './Text';

export type ButtonProps = PressableProps & {
  label: string;
  variant?: 'primary' | 'secondary';
};

export function Button({ label, variant = 'primary', style, ...rest }: ButtonProps) {
  const styles = useStyles();
  return (
    <Pressable
      style={(state) => [
        styles.base,
        variant === 'secondary' && styles.secondary,
        state.pressed && styles.pressed,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...rest}
    >
      <Text
        variant="body"
        style={variant === 'secondary' ? styles.secondaryLabel : styles.label}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const useStyles = CreateResponsiveStyle({
  base: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
  secondaryLabel: {
    color: '#1a1a1a',
    fontWeight: '600',
  },
});
