import Link from '@/elements/link-button';
import Layout from '@/layouts/default';

const ListSeasons = ({ seasons, series }) => {
  if (!seasons || seasons.length === 0) {
    return (
      <>
        <p className="mb-2">{series}</p>
        <p>No aparece</p>
      </>
    );
  }

  return (
    <Layout>
      <p className="mb-2">{series}</p>
      <div className="space-x-1">
        {seasons?.map((seasonId) => (
          <Link key={seasonId} href={`/${series}/${seasonId}`} label={seasonId} />
        ))}
      </div>
    </Layout>
  );
};

export default ListSeasons;
