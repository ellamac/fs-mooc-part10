import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
    textInput: {
        flexGrow: 1,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: theme.colors.mainBackground,
        padding: 15,
      },
      error: {
        borderColor: theme.colors.error,
      },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput, error && styles.error ];

  return <NativeTextInput style={textInputStyle} {...props} />
};

export default TextInput;