import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

export type DonutChartSegment = {
  value: number;
  color: string;
};

export type DonutChartProps = ViewProps & {
  segments: DonutChartSegment[];
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  children?: ReactNode;
};

export function DonutChart({
  segments,
  size = 140,
  strokeWidth = 14,
  trackColor = '#eceef1',
  style,
  children,
  ...rest
}: DonutChartProps) {
  const styles = useStyles();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  let offset = 0;

  return (
    <View style={[styles.container, { width: size, height: size }, style]} {...rest}>
      <Svg width={size} height={size} style={styles.svg}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {total > 0
          ? segments.map((segment, index) => {
              const segmentLength = (segment.value / total) * circumference;
              const dashOffset = circumference - offset;
              offset += segmentLength;

              return (
                <Circle
                  key={index}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={segment.color}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="butt"
                />
              );
            })
          : null}
      </Svg>
      <View style={styles.center} pointerEvents="none">
        {children}
      </View>
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    transform: [{ rotate: '-90deg' }],
  },
  center: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
