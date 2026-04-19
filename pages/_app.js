import '../globals.css';
import Head from 'next/head';

/**
 * ResoFlex™ System Initializer
 * Unified export to prevent Vercel build conflicts.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
