import Image from 'next/image';

import Layout from '../components/layout';
import Link from '../components/link-button';
import Title from '../components/title';

export default function Series({ name, seasons }) {
  return (
    <Layout>
      <Title className="text-2xl">{name}</Title>
      <div className="my-5 h-96">
        <div className="relative h-full max-w-full">
          <Image
            src={`/images/${name}.png`}
            alt={name}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
      {/* <div className="h-96">
        <div className="relative w-40 max-w-full mx-auto h-96">
          <Image src={`/images/${name}.png`} layout="fill" />
        </div>
      </div> */}
      <div className="flex justify-around">
        {Object.keys(seasons).map((seasonId) => (
          <Link key={seasonId} href={`/${name}/${seasonId}`} label={seasonId} />
        ))}
      </div>
    </Layout>
  );
}
