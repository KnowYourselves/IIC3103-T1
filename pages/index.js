import Head from 'next/head';

import Error from '@/pages/_error';
import Home from '@/templates/home';
import fetcher from '@/utils/fetchers';
import groupBy from '@/utils/group-by';

export const getServerSideProps = async () => {
  let episodes;
  try {
    episodes = await fetcher('/episodes');
  } catch {
    return {
      props: {
        error: true,
        statusCode: 500,
      },
    };
  }

  if (episodes.length === 0 || !episodes) {
    return {
      notFound: true,
    };
  }

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

const HomePage = ({ error, statusCode, series }) => (
  <>
    <Head>
      <title>NextFlix</title>
    </Head>
    {error
      ? <Error statusCode={statusCode} />
      : <Home series={series} />}
  </>
);

export default HomePage;
