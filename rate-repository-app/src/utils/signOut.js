
import { useApolloClient, } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';

const handleSignOut = () => {
  const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
  
  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  
    console.log('signed out');
  };

  return signOut;
}


export default handleSignOut;