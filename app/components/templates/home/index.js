import Title from '@/elements/title';
import Layout from '@/layouts/default';
import Series from '@/templates/home/series';

const Home = ({ series }) => (
  <Layout className="py-4">
    <div className="mx-auto text-center sm:mb-10 ">
      <Title className="hidden text-6xl sm:block">
        Welcome to
        {' '}
        <span className="text-green-900 dark:text-green-300">Next</span>
        Flix!
      </Title>
    </div>
    <div className="flex flex-col flex-wrap justify-around space-y-5 text-center sm:flex-row sm:space-y-0">
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
