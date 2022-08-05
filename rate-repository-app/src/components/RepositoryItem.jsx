
import { View, Image, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import Subheading from './Subheading';
import Text from './Text';
import theme from '../theme';
import formatInThousands from '../utils/formatInThousands';
import Button from './Button';
import * as Linking from 'expo-linking';

const RepositoryItem = ({ item }) => {
    const { id } = useParams();

    const styles = StyleSheet.create({
        repositories: {
            padding: 15,
            backgroundColor: 'white',
        },
        logo: {
            width: 60,
            height: 60,
            borderRadius: 6,
        },
        infos: {
            paddingLeft: 10,
            paddingBottom: 10,
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        info: {
            marginBottom: 8,
        },
        profile: {
            display: 'flex',
            flexDirection: 'row',
        },
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
        language: {
            backgroundColor: theme.colors.primary,
            padding: 5,
            borderRadius: 4,
        },
        button: {
            marginTop: 15,
            padding: 15,
            borderRadius: 4,
            backgroundColor: theme.colors.primary,
            color: theme.colors.light,
            textAlign: 'center',
        },
    });
    return (
        <View testID="repositoryItem" style={styles.repositories}>

            <View style={styles.profile}>
                <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
                <View style={styles.infos}>
                    <Subheading style={styles.info}>{item.fullName}</Subheading>
                    <Text style={styles.info} color="textSecondary">{item.description}</Text>
                    <View style={styles.language}><Text color="light">{item.language}</Text></View>
                </View>
            </View>
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
            {
                id ? <Button onPress={() => Linking.openURL(item.url)}>Open in Github</Button> : undefined
            }


        </View>
    );
};

export default RepositoryItem;