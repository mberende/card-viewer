import {
  extendTheme,
  type ThemeConfig,
  type ChakraTheme,
} from '@chakra-ui/react';
import { buttonStyles, linkStyles } from './components';
import { globalStyles } from './global';
import { textStyles } from './text';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: ChakraTheme['styles'] = {
  global: globalStyles,
};

const components: ChakraTheme['components'] = {
  ...buttonStyles,
  ...linkStyles,
};

export default extendTheme({ config, styles, components, textStyles });
