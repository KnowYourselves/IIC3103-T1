/* eslint-disable prefer-destructuring */
import Head from 'next/head';

import Error from '@/pages/_error';
import Episode from '@/templates/episode';
import fetcher from '@/utils/fetchers';

export const getServerSideProps = async ({ params }) => {
  const { episode: episodeId } = params;

  let characters;
  let episode;
  try {
    episode = (await fetcher(`/episodes/${episodeId}`))[0];

    if (!episode) {
      return {
        notFound: true,
      };
    }

    characters = await Promise.all(episode.characters.map((name) => (
      fetcher(`/characters?name=${name}`).then((character) => (
        character.length === 0 ? { name: 'No encontrado' } : character[0]
      ))
    )));
  } catch {
    return {
      props: {
        error: true,
        statusCode: 500,
      },
    };
  }

  episode.air_date = (new Date(episode.air_date)).toDateString();

  return {
    props: {
      episode,
      characters,
    },
  };
};

const EpisodePage = ({
  error, statusCode, episode, characters,
}) => (
  <>
    <Head>
      <title>{episode.title}</title>
    </Head>
    {error
      ? <Error statusCode={statusCode} />
      : <Episode episode={episode} characters={characters} />}
  </>
);

export default EpisodePage;
