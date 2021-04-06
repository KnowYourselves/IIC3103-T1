/* eslint-disable no-await-in-loop */
import Error from 'next/error';
import Head from 'next/head';

import Characters from '@/templates/characters';
import fetcher from '@/utils/fetchers';

const fetchCharacters = (search, offset) => fetcher(`/characters?name=${search}&offset=${offset}`);

export const getServerSideProps = async ({ query: { search } }) => {
  let offset = 0;
  let response = await fetchCharacters(search, offset);
  const characters = response;
  while (response.length > 0) {
    offset += 10;
    response = await fetchCharacters(search, offset);
    characters.push(...response);
  }

  return {
    props: {
      errorCode: true,
      characters,
    },
  };
};

const CharacterPages = ({ errorCode, characters }) => (
  <>
    <Head>
      <title>Búsqueda</title>
    </Head>
    {errorCode
      ? <Error statusCode={500} />
      : <Characters characters={characters} />}
  </>
);

export default CharacterPages;
