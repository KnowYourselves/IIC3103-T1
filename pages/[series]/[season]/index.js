import Head from 'next/head';

import Season from '@/templates/season';
import fetcher from '@/utils/fetchers';

const filterEpisodesBySeason = (episodes, season) => (
  episodes.filter((episode) => episode.season === season)
);

export const getServerSideProps = async ({ params }) => {
  const { series, season } = params;

  if (!series || !season) {
    return {
      notFound: true,
    };
  }

  const allEpisodes = await fetcher(`/episodes?series=${series}`);

  const episodes = filterEpisodesBySeason(allEpisodes, season);

  return {
    props: {
      series,
      season,
      episodes,
    },
  };
};

const SeasonPage = ({ series, season, episodes }) => (
  <>
    <Head>
      <title>{series}</title>
    </Head>
    <Season series={series} season={season} episodes={episodes} />
  </>
);

export default SeasonPage;
