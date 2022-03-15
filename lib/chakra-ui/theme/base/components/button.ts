import { type ChakraTheme } from '@chakra-ui/react';

const buttonStyles: ChakraTheme['components'] = {
  Button: {
    variants: {
      primary: {
        backgroundColor: 'purple.600',
        color: 'white',
        fontWeight: 'bold',

        _hover: {
          backgroundColor: 'purple.700',
        },
      },
    },
  },
};

export { buttonStyles };
