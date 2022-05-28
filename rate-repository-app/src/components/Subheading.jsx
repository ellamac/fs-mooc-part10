import Text from './Text';

const Subheading = ({ ...props }) => {
  return  <Text fontWeight="bold" fontSize="subheading" {...props} />
};

export default Subheading;