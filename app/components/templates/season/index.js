import Link from '@/elements/link-button';
import Title from '@/elements/title';
import Layout from '@/layouts/default';

const Season = ({ series, season, episodes }) => (
  <Layout home>
    <div className="flex flex-col w-full space-y-5">
      <Title className="text-4xl text-center sm:text-left place-self-center">
        <p className="mb-2 sm:hidden">{series}</p>
        <span className="hidden sm:inline">{series}</span>
        <span className="hidden sm:inline">{' - '}</span>
        Season
        {' '}
        {season}
      </Title>
      <p className="text-2xl text-center">Episodes</p>

      <div className="flex flex-col flex-wrap justify-between mx-auto space-y-3 text-center">
        {episodes.map((episode) => (
          <Link
            key={episode.episode_id}
            href={`/${series}/${season}/${episode.episode_id}`}
            label={episode.title}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Season;
