import Head from 'next/head';

import Error from '@/pages/_error';
import Season from '@/templates/season';
import fetcher from '@/utils/fetchers';

const filterEpisodesBySeason = (episodes, season) => (
  episodes.filter((episode) => episode.season === season)
);

export const getServerSideProps = async ({ params }) => {
  const { series, season } = params;

  let episodes;
  try {
    const allEpisodes = await fetcher(`/episodes?series=${series}`);

    if (!allEpisodes) {
      return {
        notFound: true,
      };
    }

    episodes = filterEpisodesBySeason(allEpisodes, season);

    if (episodes.length === 0) {
      return {
        notFound: true,
      };
    }
  } catch {
    return {
      props: {
        error: true,
        statusCode: 500,
      },
    };
  }

  return {
    props: {
      series,
      season,
      episodes,
    },
  };
};

const SeasonPage = ({
  error, statusCode, series, season, episodes,
}) => (
  <>
    <Head>
      <title>{series}</title>
    </Head>
    {error
      ? <Error statusCode={statusCode} />
      : <Season series={series} season={season} episodes={episodes} />}
  </>
);

export default SeasonPage;
