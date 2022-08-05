import { StyleSheet, View } from 'react-native';
import { Route, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import Repository from './Repository';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {

  return (
    <View style={styles.container}>

      <AppBar />

      <Route exact path="/"><RepositoryList /></Route>
      <Route exact path="/signin"><SignIn /></Route>
      <Route exact path="/repository/:id"><Repository /></Route>
      <Route path="*"><Redirect to="/" /></Route>

    </View>
  );
};

export default Main;