import Head from 'next/head';

import Title from '@/elements/title';
import Layout from '@/layouts/default';
import Series from '@/templates/home/series';
import { fetchSeries } from '@/utils/fetchers';
import groupBy from '@/utils/group-by';

const groupEpisodesBySeason = (episodes) => groupBy(episodes, 'season');

export const getServerSideProps = async () => {
  const breakingBad = await fetchSeries('/episodes', 'Better Call Saul');
  const betterCallSaul = await fetchSeries('/episodes', 'Breaking Bad');

  const bbSeasons = groupEpisodesBySeason(breakingBad);
  const bcsSeason = groupEpisodesBySeason(betterCallSaul);

  return {
    props: {
      series: [
        { name: 'Breaking Bad', seasons: bcsSeason },
        { name: 'Better Call Saul', seasons: bbSeasons },
      ],
    },
  };
};

const Home = ({ series }) => (
  <Layout>
    <Head>
      <title>NextFlix</title>
    </Head>
    <div className="hidden mx-auto mb-10 text-center sm:block">
      <Title className="text-6xl ">
        Welcome to
        {' '}
        <span className="text-green-900">Next</span>
        Flix!
      </Title>
    </div>
    <div className="flex flex-col justify-around space-y-20 text-center sm:flex-row sm:space-y-0 sm:space-x-52">
      {series.map((show) => (
        <div
          className="flex-grow"
          key={show.name}
        >
          <Series
            name={show.name}
            seasons={show.seasons}
          />
        </div>
      ))}
    </div>
  </Layout>
);

export default Home;
