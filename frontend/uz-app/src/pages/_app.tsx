import type { AppProps } from 'next/app';

import { Providers as AppProvider } from '@/providers/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;