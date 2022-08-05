import Text from './Text';
import { StyleSheet, Pressable} from 'react-native';

import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 10,
  }

});

const AppBarTab = ({ path, ...props }) => {
  return (
    path 
      ? <Link to={path} style={styles.tab}>
          <Text fontWeight="bold" color="light" {...props} />
        </Link>
      : <Pressable onPress={props.onPress} style={styles.tab}>
          <Text fontWeight="bold" color="light" {...props} />
        </Pressable>
  );
};

export default AppBarTab;