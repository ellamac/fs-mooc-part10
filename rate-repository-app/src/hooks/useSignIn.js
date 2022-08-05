
import { useApolloClient, useMutation } from '@apollo/client';

import { SIGN_IN } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
   const { data } = await mutate({variables: {username: username, password: password}});
   console.log(data.authenticate.accessToken);
   await authStorage.setAccessToken(data.authenticate.accessToken);
   apolloClient.resetStore();
   return data;
  }
  

  return [signIn, result];
};

export default useSignIn;