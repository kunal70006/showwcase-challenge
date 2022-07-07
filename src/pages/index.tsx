import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Showwcase React Challenge</title>
        <meta name="description" content="Showwcase React Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>Hi there! Welcome to your education showcase.</p>
        <p>Type your name and click &ldquo;Enter&rdquo; below to begin!.</p>
      </div>
    </>
  );
};

export default Home;
