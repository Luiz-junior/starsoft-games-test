import type { ReactElement, ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { makeStore, type AppStore } from '@/store';
import { theme } from '@/styles/theme';

interface Options extends Omit<RenderOptions, 'wrapper'> {
  store?: AppStore;
}

export function renderWithProviders(ui: ReactElement, { store = makeStore(), ...options }: Options = {}) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...options }) };
}
