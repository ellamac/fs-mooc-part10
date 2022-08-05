
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme'
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import Button from './Button';

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
    marginVertical: 7.5,
  }

})


const initialValues = {
  username: '',
  password: '',
};


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});



export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" style={styles.child} autoCapitalize='none' />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.child} />
      <Button onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    console.log("SignIn");
    console.log(values);

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;