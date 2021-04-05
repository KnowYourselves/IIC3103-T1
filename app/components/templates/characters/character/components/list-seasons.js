import Link from '@/elements/link-button';

const ListSeasons = ({ seasons, series }) => {
  if (!seasons || seasons.length === 0) {
    return (
      <div className="flex flex-col">
        <p className="mb-2">{series}</p>
        <p>No aparece</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p className="mb-2">{series}</p>
      <div className="space-x-1">
        {seasons?.map((seasonId) => (
          <Link key={seasonId} href={`/${series}/${seasonId}`} label={seasonId} />
        ))}
      </div>
    </div>
  );
};

export default ListSeasons;
