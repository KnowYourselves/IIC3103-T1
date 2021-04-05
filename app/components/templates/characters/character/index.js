import Layout from '@/layouts/default';

import Characteristics from './components/characteristics';
import ListSeasons from './components/list-seasons';

const Character = ({ character }) => (
  <Layout>
    <div className="py-4 space-y-5 bg-gray-300 rounded-lg shadow-xl">
      <div className="flex flex-col space-y-5 text-center sm:space-y-0 sm:flex-row">
        <div>
          <img
            className="w-auto mx-auto h-72 sm:h-96"
            src={character.img}
            alt=""
          />
        </div>
        <Characteristics character={character} />
      </div>
      <div className="flex justify-center space-x-12">
        <ListSeasons seasons={character.appearance} series="Breaking Bad" />
        <ListSeasons seasons={character.better_call_saul_appearance} series="Better Call Saul" />
      </div>
      {character.quotes.map((quote) => (
        <p key={quote.quote_id}>
          {quote.quote}
        </p>
      ))}
    </div>
  </Layout>
);

export default Character;
