import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import '../theme/smoothscroll.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
