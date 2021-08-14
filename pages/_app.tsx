import '@styles/globals.css';

import { initializeAmplitude } from 'lib/utils/amplitude';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';

initializeAmplitude();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Kyrics</title>
        <link rel="icon" href="/assets/icons/favicon.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="description"
          content="Learn Korean through your favorite K-Pop artists and songs!"
        />
        <meta
          name="keywords"
          content="Learn Korean through your favorite K-Pop artists and songs!"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kyrics" />
        <meta property="og:url" content="https://kyrics.vercel.app/" />
        <meta property="og:site_name" content="Kyrics" />
        <meta property="og:description" content="케이팝 가사로 배우는 우리말, 키릭스" />
        <meta
          property="og:image"
          content="https://kyrics.s3.ap-northeast-2.amazonaws.com/kyrics_og_image.png"
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
