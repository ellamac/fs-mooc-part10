import Text from './Text';
import {  Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.light,
  },
  submit: {
    padding: 15,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    color: theme.colors.light,
    textAlign: 'center',
  },
  child: {
    marginBottom: 15,
  }
 
})


const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" style={styles.child}/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.child}/>
      <Pressable onPress={onSubmit} style={styles.child}>
        <Text fontWeight='bold' style={styles.submit}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;