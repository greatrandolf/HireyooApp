import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { Text } from './Text';

export type BadgeTone = 'red' | 'orange' | 'green' | 'blue' | 'neutral';
export type BadgeVariant = 'solid' | 'outline';

export type BadgeProps = ViewProps & {
  label: string;
  tone?: BadgeTone;
  variant?: BadgeVariant;
};

const TONE_COLORS: Record<BadgeTone, { background: string; text: string; border: string }> = {
  red: { background: '#fde3e3', text: '#c0392b', border: '#f3a9a9' },
  orange: { background: '#fdf1d6', text: '#b9770e', border: '#f0cd85' },
  green: { background: '#dcf5e3', text: '#1e8449', border: '#9adcb5' },
  blue: { background: '#e3edff', text: '#2563eb', border: '#a9c4f5' },
  neutral: { background: '#eceef1', text: '#4b4b4b', border: '#d4d6da' },
};

export function Badge({ label, tone = 'neutral', variant = 'solid', style, ...rest }: BadgeProps) {
  const styles = useStyles();
  const colors = TONE_COLORS[tone];
  const isOutline = variant === 'outline';

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: isOutline ? '#fff' : colors.background,
          borderColor: colors.border,
          borderWidth: isOutline ? 1 : 0,
        },
        style,
      ]}
      {...rest}
    >
      <Text variant="caption" style={[styles.label, { color: colors.text }]}>
        {label}
      </Text>
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
