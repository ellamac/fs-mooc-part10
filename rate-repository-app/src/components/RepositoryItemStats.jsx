
import { View, StyleSheet } from 'react-native';

import Text from './Text';


const RepositoryItemStats = ({ item }) => {

    const styles = StyleSheet.create({
        stats: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        stat: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    });

    const toK = (num) => {
        return num > 999 ? (num/1000).toFixed(1) + 'k' : num;
    }

    return (
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text fontWeight="bold">{toK(item.stargazersCount)}</Text>
                    <Text color="textSecondary">Stars</Text>
                </View>
                <View style={styles.stat}>
                    <Text fontWeight="bold">{toK(item.forksCount)}</Text>
                    <Text color="textSecondary">Forks</Text>
                </View>
                <View style={styles.stat}>
                    <Text fontWeight="bold">{toK(item.reviewCount)}</Text>
                    <Text color="textSecondary">Reviews</Text>
                </View>
                <View style={styles.stat}>
                    <Text fontWeight="bold">{toK(item.ratingAverage)}</Text>
                    <Text color="textSecondary">Rating</Text>
                </View>
            </View>
    );
};

export default RepositoryItemStats;