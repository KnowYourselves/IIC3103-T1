import Title from '@/elements/title';
import Layout from '@/layouts/default';
import Series from '@/templates/home/series';

const Home = ({ series }) => (
  <Layout>
    <div className="mx-auto text-center sm:mb-10 ">
      <Title className="hidden text-6xl sm:block">
        Welcome to
        {' '}
        <span className="text-green-900">Next</span>
        Flix!
      </Title>
      <p className="max-h-full px-4 py-2 text-2xl text-black sm:hidden">
        <span className="text-green-900">Next</span>
        Flix!
      </p>
    </div>
    <div className="flex flex-col flex-wrap justify-around space-y-20 text-center sm:flex-row sm:space-y-0">
      {series.map((show) => (
        <div
          key={show.name}
        >
          <Series
            name={show.name}
            seasons={show.seasons}
          />
        </div>
      ))}
    </div>
  </Layout>
);

export default Home;
