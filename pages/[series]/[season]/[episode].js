import Link from '@/elements/link-button';
import Layout from '@/layouts/default';
import fetcher, { fetchCharacterByName } from '@/utils/fetchers';

export const getServerSideProps = async ({ params }) => {
  const { episode: episodeId } = params;

  if (!episodeId) {
    return {
      notFound: true,
    };
  }

  const episode = (await fetcher(`/episodes/${episodeId}`))[0];
  const characters = await Promise.all(episode.characters.map((name) => (
    fetchCharacterByName(name).then((character) => (
      character.length === 0 ? { name: 'No encontrado' } : character[0]
    ))
  )));

  return {
    props: {
      episode,
      characters,
    },
  };
};

export default function Episode({ episode, characters }) {
  return (
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
}
