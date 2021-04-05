import Head from 'next/head';

import Character from '@/templates/characters/character';
import fetcher from '@/utils/fetchers';

export const getServerSideProps = async ({ params }) => {
  const { character: characterId } = params;

  if (!characterId) {
    return {
      notFound: true,
    };
  }

  const character = (await fetcher(`/characters/${characterId}`))[0];
  character.quotes = await fetcher(`/quote?author=${character.name}`);
  character.occupation = character.occupation.join(', ');

  return {
    props: {
      character,
    },
  };
};

const CharacterPage = ({ character }) => (
  <>
    <Head>
      <title>{character.name}</title>
    </Head>
    <Character character={character} />
  </>
);

export default CharacterPage;
