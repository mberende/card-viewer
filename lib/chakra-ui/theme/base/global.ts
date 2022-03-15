import { type ChakraTheme } from '@chakra-ui/react';

const globalStyles: ChakraTheme['styles']['global'] = {
  '*': {
    boxSizing: 'border-box',
  },
  'html, body': {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    fontSize: '12px',
  },
  '#__next': {
    height: '100%',
    width: '100%',
  },
};

export { globalStyles };
