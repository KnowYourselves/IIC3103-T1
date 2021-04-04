import Link from '@/elements/link-button';
import Layout from '@/layouts/default';

const Season = ({ series, season, episodes }) => (
  <Layout>
    {episodes.map((episode) => (
      <div key={episode.episode_id}>
        <Link href={`/${series}/${season}/${episode.episode_id}`} label={episode.title} />
      </div>
    ))}
  </Layout>
);

export default Season;
