import Head from 'next/head';
import Layout from '../components/layout';
import Title from '../components/title';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NextFlix</title>
      </Head>
      <section>
        <Title className="text-6xl">Welcome to NextFlix!</Title>
      </section>
    </Layout>
  );
}
