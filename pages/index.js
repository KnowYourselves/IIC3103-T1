import Head from 'next/head';

import Home from '@/templates/home';
import fetcher from '@/utils/fetchers';
import groupBy from '@/utils/group-by';

export const getServerSideProps = async () => {
  const episodes = await fetcher('/episodes');
  const seriesNames = new Set(episodes.map((episode) => episode.series));
  const series = [...seriesNames].map((name) => ({
    name,
    seasons: groupBy(episodes.filter((episode) => episode.series === name), 'season'),
  }));

  return {
    props: {
      series,
    },
  };
};

const HomePage = ({ series }) => (
  <>
    <Head>
      <title>NextFlix</title>
    </Head>
    <Home series={series} />
  </>
);

export default HomePage;
