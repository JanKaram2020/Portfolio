import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import * as gtag from 'lib/gtag';
import 'theme/smoothscroll.css';
import 'globals.css';
import { useTwDarkMode } from '../lib/useTwDarkMode';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  useTwDarkMode();
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
