import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import TemplateProvider from '../context/provider/TemplateProvider.js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TemplateProvider>
        <Component {...pageProps} />
      </TemplateProvider>
    </>
  );
}

export default MyApp;
