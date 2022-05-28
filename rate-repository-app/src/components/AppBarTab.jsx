import Text from './Text';
import { Link } from 'react-router-native';



const AppBarTab = ({ path, ...props }) => {
  return (
    <Link to={path} >
      <Text fontWeight="bold" color="light" {...props} />
    </Link>
  );
};

export default AppBarTab;