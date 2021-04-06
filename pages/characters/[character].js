/* eslint-disable prefer-destructuring */
import Head from 'next/head';

import Error from '@/pages/_error';
import Character from '@/templates/characters/character';
import fetcher from '@/utils/fetchers';

export const getServerSideProps = async ({ params }) => {
  const { character: characterId } = params;

  let character;
  try {
    character = (await fetcher(`/characters/${characterId}`))[0];

    if (!character) {
      return {
        notFound: true,
      };
    }

    character.quotes = await fetcher(`/quote?author=${character.name}`);
  } catch {
    return {
      props: {
        error: true,
        statusCode: 500,
      },
    };
  }

  character.occupation = character.occupation.join(', ');

  return {
    props: {
      character,
    },
  };
};

const CharacterPage = ({ character, error, statusCode }) => (
  <>
    <Head>
      <title>{character?.name}</title>
    </Head>
    {error
      ? <Error statusCode={statusCode} />
      : <Character character={character} />}
  </>
);

export default CharacterPage;
