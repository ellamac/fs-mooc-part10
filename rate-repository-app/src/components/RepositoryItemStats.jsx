
import { View, StyleSheet } from 'react-native';
import formatInThousands from '../utils/formatInThousands';

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


    return (
        <View style={styles.stats}>
            <View style={styles.stat}>
                <Text fontWeight="bold">{formatInThousands(item.stargazersCount)}</Text>
                <Text color="textSecondary">Stars</Text>
            </View>
            <View style={styles.stat}>
                <Text fontWeight="bold">{formatInThousands(item.forksCount)}</Text>
                <Text color="textSecondary">Forks</Text>
            </View>
            <View style={styles.stat}>
                <Text fontWeight="bold">{formatInThousands(item.reviewCount)}</Text>
                <Text color="textSecondary">Reviews</Text>
            </View>
            <View style={styles.stat}>
                <Text fontWeight="bold">{formatInThousands(item.ratingAverage)}</Text>
                <Text color="textSecondary">Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItemStats;