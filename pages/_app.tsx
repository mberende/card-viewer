import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { base as baseTheme } from '@/lib/chakra-ui/theme';


const NextApp = ({ Component, pageProps }: AppProps) => {

  return (
      <ChakraProvider theme={baseTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  );
};

export default NextApp;
