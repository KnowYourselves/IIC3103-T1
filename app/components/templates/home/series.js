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
    <Layout className="bg-gray-100 rounded-md shadow-lg">
      <Title className="text-2xl">{name}</Title>
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
      <div className="flex">
        {Object.keys(seasons).map((seasonId) => (
          <div className="flex-grow" key={seasonId}>
            <Link href={`/${name}/${seasonId}`} label={seasonId} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Series;
