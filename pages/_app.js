// pages/_app.js
import React from 'react';
import Head from 'next/head';
import '@/app/styles/globals.css'; // Import your global CSS
import 'tailwindcss/tailwind.css';; // Import Tailwind CSS

function MyApp({ Component, pageProps }) {
  return (
    <Head>
      <Component {...pageProps} />
    </Head>
  );
}

export default MyApp;
