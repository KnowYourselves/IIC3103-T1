import Layout from './layout';
import Link from './link-button';

export default function ListSeasons({ seasons, series }) {
  if (!seasons || seasons.length === 0) {
    return (
      <>
        <p>{series}</p>
        <p>No aparece</p>
      </>
    );
  }

  return (
    <Layout>
      <p>{series}</p>
      {seasons?.map((seasonId) => (
        <Link key={seasonId} href={`/${series}/${seasonId}`} label={seasonId} />
      ))}
    </Layout>
  );
}
