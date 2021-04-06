import Link from '@/elements/link-button';

const Characters = ({ characters }) => (
  <>
    {characters.length
      ? (
        <div className="mx-auto mb-2 text-center">
          <p className="mt-2 mb-4 text-4xl">Results</p>
          <div className="flex flex-col flex-wrap justify-between mx-auto space-y-3 sm:space-y-0 sm:gap-4 sm:grid sm:grid-cols-2">
            {characters.map((character) => (
              <Link
                className="h-10"
                key={character.char_id}
                href={`/characters/${character.char_id}`}
                label={character.name}
              />
            ))}
          </div>
        </div>
      )
      : (
        <div className="flex flex-col items-center justify-center flex-grow space-y-2 text-2xl text-gray-600 sm:text-5xl">
          <p>No results were found</p>
          <p>
            :(
          </p>
        </div>
      )}
  </>
);

export default Characters;
