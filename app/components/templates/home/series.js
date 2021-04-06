import Image from 'next/image';

import Link from '@/elements/link-button';
import Title from '@/elements/title';
import Layout from '@/layouts/default';

const Series = ({ name, seasons }) => {
  let imagePath = name;
  if (name !== 'Better Call Saul' && name !== 'Breaking Bad') {
    imagePath = 'placeholder';
  }

  return (
    <Layout>
      <div className="px-4 py-4 space-y-4 bg-gray-300 rounded-lg shadow-xl dark:bg-gray-800 sm:w-96">
        <Title className="text-2xl font-bold">{name}</Title>
        <div className="my-5 h-96">
          <div className="relative h-full max-w-full">
            <Image
              src={`/images/${imagePath}.png`}
              alt={imagePath}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="w-full text-xl font-semibold text-center">
          <p>Seasons</p>
        </div>
        <div className="flex flex-wrap">
          {Object.keys(seasons).map((seasonId) => (
            <div className="flex-grow mx-2 mb-6" key={seasonId}>
              <Link home href={`/${name}/${seasonId}`} label={`S${seasonId}`} />
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Series;
