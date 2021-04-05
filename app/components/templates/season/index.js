import Link from '@/elements/link-button';
import Title from '@/elements/title';
import Layout from '@/layouts/default';

const Season = ({ series, season, episodes }) => (
  <Layout>
    <div className="space-y-5 text-center">
      <Title>
        {series}
        {' '}
        - Temporada
        {' '}
        {season}
      </Title>
      {episodes.map((episode) => (
        <div key={episode.episode_id}>
          <Link href={`/${series}/${season}/${episode.episode_id}`} label={episode.title} />
        </div>
      ))}
    </div>
  </Layout>
);

export default Season;
