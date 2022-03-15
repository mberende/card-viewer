import { type ChakraTheme } from '@chakra-ui/react';

const linkStyles: ChakraTheme['components'] = {
  Link: {
    baseStyle: {
      fontWeight: 600,
      color: 'black',

      _hover: {
        textDecoration: 'none',
      },
    },
    variants: {
      primary: {
        color: 'purple.600',
        fontWeight: 'bold',

        _hover: {
          color: 'purple.700',
        },
      },
    },
  },
};

export { linkStyles };
