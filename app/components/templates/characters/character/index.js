import Layout from '@/layouts/default';

import Characteristics from './components/characteristics';
import Quotes from './components/quotes';
import Series from './components/series';

const Character = ({ character }) => (
  <Layout>
    <div className="px-4 py-4 space-y-5 bg-gray-300 rounded-lg shadow-xl">
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
      <Series character={character} />
      <Quotes character={character} />
    </div>
  </Layout>
);

export default Character;
