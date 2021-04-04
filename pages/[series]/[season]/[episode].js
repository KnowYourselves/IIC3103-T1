import Episode from '@/templates/episode';
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

const EpisodePage = ({ episode, characters }) => (
  <Episode episode={episode} characters={characters} />
);

export default EpisodePage;
