/* eslint-disable no-await-in-loop */
import Head from 'next/head';

import Error from '@/pages/_error';
import Characters from '@/templates/characters';
import compareByValue from '@/utils/compare';
import fetcher from '@/utils/fetchers';

const fetchCharacters = (search, offset) => fetcher(`/characters?name=${search}&offset=${offset}`);

export const getServerSideProps = async ({ query: { search } }) => {
  let offset = 0;
  let characters;

  try {
    let response = await fetchCharacters(search, offset);
    characters = response;
    while (response.length > 0) {
      offset += 10;
      response = await fetchCharacters(search, offset);
      characters.push(...response);
    }
  } catch {
    return {
      props: {
        error: true,
        statusCode: 500,
      },
    };
  }

  characters.sort(compareByValue('name'));

  return {
    props: {
      characters,
    },
  };
};

const CharacterPages = ({ error, statusCode, characters }) => (
  <>
    <Head>
      <title>Búsqueda</title>
    </Head>
    {error
      ? <Error statusCode={statusCode} />
      : <Characters characters={characters} />}
  </>
);

export default CharacterPages;
