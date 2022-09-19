import React from 'react';
import Head from 'next/head';

import ISeo from './types';

export default ({ headTitle, prevImage }: ISeo) => {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Boiler Plate';
  const title = hasHeadTitle
    ? (`${headTitle} | ${baseTitle}`)
    : baseTitle;

  const hasPrevImage = Boolean(prevImage);

  const description = 'Boiler plate Next.js';
  const image = hasPrevImage ? prevImage : '';
  const urlBase = 'boiler-plate.com';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Gabriel Bridi" />
      <meta name="keywords" content="Next.js, React, Portfolio" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};
