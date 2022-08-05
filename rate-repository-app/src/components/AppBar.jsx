import { View, StyleSheet, ScrollView } from 'react-native';
import useMe from '../hooks/useMe';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import handleSignOut from '../utils/signOut';

const styles = StyleSheet.create({
    scroll: {
        paddingTop: Constants.statusBarHeight * 2,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.dark,
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
    },

});


const AppBar = () => {
    /* currentUser: {me: {username, id} } */
    /* OR */
    /* currentUser: {me: null } */
    const currentUser = useMe();

    const signOut = handleSignOut();

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll} horizontal >
            <AppBarTab path="/">Repositories</AppBarTab>
            { currentUser.me
                ? <AppBarTab onPress={signOut}>Sign out</AppBarTab>
                : <AppBarTab path="/signin">Sign in</AppBarTab>
            }
            
        </ScrollView>
        </View>
    );
};

export default AppBar;