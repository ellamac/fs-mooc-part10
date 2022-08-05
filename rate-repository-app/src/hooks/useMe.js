
import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useMe = () => {
  const {data, loading, error, refetch} = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    loading 
      ? { loading, error}
      : { me: data.me, loading, error, refetch}
  );
};

export default useMe;