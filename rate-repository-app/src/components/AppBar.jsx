import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight*2,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.dark,
    },
    text: {
        color: 'white',
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab>Repositories</AppBarTab>
       </View>;
};

export default AppBar;