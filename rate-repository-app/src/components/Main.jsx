
import { StyleSheet, View} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';


// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <>
        <AppBar />
        <View><RepositoryList /></View>
        </>
    );
};

export default Main;