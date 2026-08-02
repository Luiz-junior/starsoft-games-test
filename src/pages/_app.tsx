import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { store } from '@/store';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useCartPersistence } from '@/hooks/useCartPersistence';

// The drawer is only needed after user interaction: load it lazily, client-side.
const OverlayCheckout = dynamic(
  () => import('@/components/OverlayCheckout').then((mod) => mod.OverlayCheckout),
  { ssr: false },
);

function CartPersistence() {
  useCartPersistence();
  return null;
}

export default function App({ Component, pageProps, router }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60_000, retry: 1 } },
      }),
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <GlobalStyle />
          <CartPersistence />
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              key={router.route}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
          <Footer />
          <OverlayCheckout />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
