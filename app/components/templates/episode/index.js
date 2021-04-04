import Link from '@/elements/link-button';
import Layout from '@/layouts/default';

const Episode = ({ episode, characters }) => (
  <Layout>
    <p>{episode?.title}</p>
    <p>{episode?.air_date}</p>
    {characters.map((character, index) => (
      <Link
      // eslint-disable-next-line react/no-array-index-key
        key={index + character.name}
        href={{
          pathname: '/characters/[id]',
          query: { id: character.char_id || -1 },
        }}
        disabled={!character.char_id}
        label={character.name}
      />
    ))}
  </Layout>
);

export default Episode;
