
import { View, Image, StyleSheet } from 'react-native';
import Subheading from './Subheading';
import Text from './Text';
import theme from '../theme';
import RepositoryItemStats from './RepositoryItemStats';

const RepositoryItem = ({ item }) => {

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
    });
    return (
        <View style={styles.repositories}>
            <View style={styles.profile}>
                <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
                <View style={styles.infos}>
                    <Subheading style={styles.info}>{item.fullName}</Subheading>
                    <Text style={styles.info} color="textSecondary">{item.description}</Text>
                    <View style= {styles.language}><Text color="light">{item.language}</Text></View>  
                </View>
            </View>
          <RepositoryItemStats item={item} />
        </View>
    );
};

export default RepositoryItem;