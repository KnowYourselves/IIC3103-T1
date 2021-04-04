import Season from '@/templates/season';
import { fetchSeries } from '@/utils/fetchers';

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

  const allEpisodes = await fetchSeries('/episodes', series);
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
  <Season series={series} season={season} episodes={episodes} />
);

export default SeasonPage;
