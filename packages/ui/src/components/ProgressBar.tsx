import { View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

export type ProgressBarProps = ViewProps & {
  value: number;
  max: number;
  color?: string;
};

export function ProgressBar({ value, max, color = '#1a1a1a', style, ...rest }: ProgressBarProps) {
  const styles = useStyles();
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <View style={[styles.track, style]} {...rest}>
      <View style={[styles.fill, { width: `${percent}%`, backgroundColor: color }]} />
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#eceef1',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 3,
  },
});
