import Head from 'next/head';

import Layout from '../components/layout';
import Series from '../components/series';
import Title from '../components/title';
import { fetchSeries } from '../lib/fetchers';
import { groupBy } from '../lib/utils';

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

export default function Home({ series }) {
  return (
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
}
