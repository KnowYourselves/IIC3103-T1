import Link from '@/elements/link-button';

const Characters = ({ characters }) => (
  <div>
    {characters.map((character) => (
      <Link
        key={character.char_id}
        href={`/characters/${character.char_id}`}
        label={character.name}
      />
    ))}
  </div>
);

export default Characters;
