import Link from '@/elements/link-button';

const Characters = ({ characters }) => (
  <>
    {characters.length
      ? (
        <div className="flex flex-wrap justify-between">
          {characters.map((character) => (
            <div
              className="flex flex-col justify-center mb-4"
              key={character.char_id}
            >
              <Link
                href={`/characters/${character.char_id}`}
                label={character.name}
              />
            </div>
          ))}
        </div>
      )
      : (
        <div className="flex flex-col items-center justify-center flex-grow space-y-2 text-2xl text-gray-600 sm:text-5xl">
          <p>No results where found</p>
          <p>:(</p>
        </div>
      )}
  </>
);

export default Characters;
