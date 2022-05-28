import Text from './Text';
import { StyleSheet} from 'react-native';

import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 10,
  }

});

const AppBarTab = ({ path, ...props }) => {
  return (
    <Link to={path} style={styles.tab}>
      <Text fontWeight="bold" color="light" {...props} />
    </Link>
  );
};

export default AppBarTab;