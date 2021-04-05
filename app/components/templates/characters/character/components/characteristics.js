import Title from '@/elements/title';

const Characteristics = ({ character }) => (
  <div className="flex flex-col justify-center flex-grow py-2 align-middle border-2 border-green-900 rounded-lg sm:mx-6">
    <Title className="mb-6 text-3xl">
      Characteristics
    </Title>
    <div className="flex flex-row justify-between w-full mx-auto">
      <div className="flex flex-col justify-center w-full px-2 space-y-2 font-bold text-right">
        <p>Name</p>
        <p>Occupation</p>
        <p>Status</p>
        <p>Nickname</p>
        <p>Potrayed By</p>
        <p>Category</p>
      </div>
      <div className="flex flex-col justify-center w-full px-2 space-y-2 text-left flex-nowrap">
        <p>{character.name}</p>
        <p>{character.occupation}</p>
        <p>{character.status}</p>
        <p>{character.nickname}</p>
        <p>{character.portrayed}</p>
        <p>{character.category}</p>
      </div>
    </div>
  </div>
);

export default Characteristics;
