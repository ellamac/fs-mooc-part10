import Text from './Text';
import {Pressable} from 'react-native';



const AppBarTab = ({onPress, ...props }) => {
  return   <Pressable onPress={onPress} >
  <Text fontWeight="bold" color="light" {...props}/>
</Pressable>
};

export default AppBarTab;