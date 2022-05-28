import Text from './Text';

const Heading = ({ ...props }) => {
  return  <Text fontWeight="bold" fontSize="heading" {...props} />
};

export default Heading;