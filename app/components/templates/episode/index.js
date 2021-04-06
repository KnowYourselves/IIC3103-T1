/* eslint-disable react/no-array-index-key */
import Link from '@/elements/link-button';
import Title from '@/elements/title';
import Layout from '@/layouts/default';

const Episode = ({ episode, characters }) => (
  <Layout className="py-4">
    <div className="flex flex-col w-full space-y-5">
      <Title className="text-4xl text-center sm:text-left place-self-center">
        <p className="mb-2 sm:hidden">{episode.series}</p>
        <span className="hidden mr-8 sm:inline">{episode.series}</span>
        {episode.episode}
        {' '}
        -
        {' '}
        {episode.title}
      </Title>
      <p className="text-lg place-self-center">
        Season
        {' '}
        {episode.season}
        , aired
        {' '}
        {episode?.air_date}
      </p>
      <p className="text-2xl text-center">Characters</p>

      <div className="flex flex-col flex-wrap justify-between mx-auto space-y-3 text-center">
        {characters.map((character, index) => (
          <Link
            key={index + character.name}
            href={{
              pathname: '/characters/[id]',
              query: { id: character.char_id || -1 },
            }}
            disabled={!character.char_id}
            label={character.name}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Episode;
