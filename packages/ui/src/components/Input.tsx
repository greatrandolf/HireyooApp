import { TextInput, TextInputProps } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

export type InputProps = TextInputProps;

export function Input({ style, ...rest }: InputProps) {
  const styles = useStyles();
  return <TextInput style={[styles.input, style]} placeholderTextColor="#999" {...rest} />;
}

const useStyles = CreateResponsiveStyle({
  input: {
    borderWidth: 1,
    borderColor: '#d0d0d5',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#1a1a1a',
  },
});
