
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  return (
    loading
      ? { loading, error }
      : { repositories: data.repositories, loading, error, refetch }
  );
};

export default useRepositories;