import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight * 2,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.dark,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab>Repositories</AppBarTab>
    </View>;
};

export default AppBar;