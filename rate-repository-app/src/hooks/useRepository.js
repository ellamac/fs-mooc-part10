
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';


const useRepository = (repositoryId) => {
    const { data, ...result } = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: repositoryId },
        fetchPolicy: 'cache-and-network',
    });
    return { data: data ? data.repository : undefined, ...result }
};

export default useRepository;