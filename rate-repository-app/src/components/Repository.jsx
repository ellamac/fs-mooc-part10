import { Text, FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});
const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
    const { id } = useParams();
    const repository = useRepository(id);
    const reviews = repository.data
        ? repository.data.reviews.edges.map(edge => edge.node)
        : [];

    return (
        repository.data
            ? <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={() => <View><RepositoryItem item={repository.data} /><ItemSeparator /></View>}
            />
            : <Text>Could not load repository</Text>
    );
};

export default Repository;