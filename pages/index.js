import Home from '@/templates/home';
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

const HomePage = ({ series }) => (
  <Home series={series} />
);

export default HomePage;
