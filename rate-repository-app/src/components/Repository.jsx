import { Text } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";


const Repository = () => {
    const { id } = useParams();
    const repository = useRepository(id);
    return (
        repository.data ? <RepositoryItem item={repository.data} /> : <Text>Could not load repository</Text>
    );
};

export default Repository;