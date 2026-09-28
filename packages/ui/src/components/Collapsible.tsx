import { useState } from 'react';
import { Pressable, View, ViewProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

import { Text } from './Text';

export type CollapsibleProps = ViewProps & {
  title: string;
  selected?: boolean;
  defaultExpanded?: boolean;
};

export function Collapsible({
  title,
  selected = false,
  defaultExpanded = false,
  style,
  children,
  ...rest
}: CollapsibleProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const styles = useStyles();

  return (
    <View style={[styles.container, selected && styles.containerSelected, style]} {...rest}>
      <Pressable style={styles.header} onPress={() => setExpanded((prev) => !prev)}>
        <Text variant="body" style={selected ? styles.title : undefined}>
          {title}
        </Text>
        <Text variant="caption">{expanded ? 'x' : 'v'}</Text>
      </Pressable>
      {expanded ? <View style={styles.body}>{children}</View> : null}
    </View>
  );
}

const useStyles = CreateResponsiveStyle({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  containerSelected: {
    backgroundColor: '#f5f5f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '600',
  },
  body: {
    paddingBottom: 8,
  },
});
