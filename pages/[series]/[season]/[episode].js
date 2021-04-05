import Head from 'next/head';

import Episode from '@/templates/episode';
import fetcher from '@/utils/fetchers';

export const getServerSideProps = async ({ params }) => {
  const { episode: episodeId } = params;

  if (!episodeId) {
    return {
      notFound: true,
    };
  }

  const episode = (await fetcher(`/episodes/${episodeId}`))[0];
  const characters = await Promise.all(episode.characters.map((name) => (
    fetcher(`/characters?name=${name}`).then((character) => (
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

const EpisodePage = ({ episode, characters }) => (
  <>
    <Head>
      <title>{episode.title}</title>
    </Head>
    <Episode episode={episode} characters={characters} />
  </>
);

export default EpisodePage;
