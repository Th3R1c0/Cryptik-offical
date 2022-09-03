import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CallToAction from '../components/homepage/calltoaction';
import Contact from '../components/homepage/contact';
import MainSection from '../components/homepage/head';
import MarketTrend from '../components/homepage/markettrend';
import ShowCase from '../components/homepage/showcase';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection />
      <MarketTrend />
      <ShowCase />
      <Contact />
      <CallToAction />
    </div>
  );
};

export default Home;
