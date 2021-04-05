/* eslint-disable react/no-array-index-key */
import Link from '@/elements/link-button';
import Layout from '@/layouts/default';

const Episode = ({ episode, characters }) => (
  <Layout>
    <div className="flex flex-col items-center space-y-4">
      <div>
        <p>{episode?.title}</p>
      </div>
      <div>
        <p>{episode?.air_date}</p>
      </div>
      {characters.map((character, index) => (
        <div
          key={index + character.name}
        >
          <Link
            href={{
              pathname: '/characters/[id]',
              query: { id: character.char_id || -1 },
            }}
            disabled={!character.char_id}
            label={character.name}
          />
        </div>
      ))}
    </div>
  </Layout>
);

export default Episode;
