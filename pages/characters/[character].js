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

  return {
    props: {
      character,
    },
  };
};

const CharacterPage = ({ character }) => (
  <Character character={character} />
);

export default CharacterPage;
