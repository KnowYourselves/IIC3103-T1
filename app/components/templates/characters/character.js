import Layout from '@/layouts/default';
import ListSeasons from '@/templates/characters/list-seasons';

const Character = ({ character }) => (
  <Layout>
    <div className="flex flex-col text-center">
      <div>
        <img
          className="w-auto mx-auto h-96"
          src={character.img}
          alt=""
        />
      </div>
      <p>{character.name}</p>
      <p>{character.occupation}</p>
      <p>{character.status}</p>
      <p>{character.nickname}</p>
      <p>{character.portrayed}</p>
      <p>{character.category}</p>
      <ListSeasons seasons={character.appearance} series="Breaking Bad" />
      <ListSeasons seasons={character.better_call_saul_appearance} series="Better Call Saul" />
      {character.quotes.map((quote) => (
        <p key={quote.quote_id}>
          {quote.quote}
        </p>
      ))}
    </div>
  </Layout>
);

export default Character;
