import Layout from '@/layouts/default';
import ListSeasons from '@/templates/characters/list-seasons';

const Character = ({ character }) => (
  <Layout>
    <img
      className="max-h-96"
      src={character.img}
      alt=""
    />
    <p>{character.name}</p>
    <p>{character.occupation}</p>
    <p>{character.status}</p>
    <p>{character.nickname}</p>
    <p>{character.portrayed}</p>
    <p>{character.category}</p>
    <ListSeasons seasons={character.appearance} series="Breaking Bad" />
    <ListSeasons seasons={character.better_call_saul_appearance} series="Better Call Saul" />
  </Layout>
);

export default Character;