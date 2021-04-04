import Link from '@/elements/link-button';
import Layout from '@/layouts/default';
import { fetchSeries } from '@/utils/fetchers';

const filterEpisodesBySeason = (episodes, season) => (
  episodes.filter((episode) => episode.season === season)
);

export const getServerSideProps = async ({ params }) => {
  const { series, season } = params;
  const allEpisodes = await fetchSeries('/episodes', series);
  const episodes = filterEpisodesBySeason(allEpisodes, season);

  if (!series || !season) {
    return {
      notFound: true,
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

export default function Season({ series, season, episodes }) {
  return (
    <Layout>
      {episodes.map((episode) => (
        <div key={episode.episode_id}>
          <Link href={`/${series}/${season}/${episode.episode_id}`} label={episode.title} />
        </div>
      ))}
    </Layout>
  );
}
