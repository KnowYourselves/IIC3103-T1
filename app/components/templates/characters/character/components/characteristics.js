import Title from '@/elements/title';

const Characteristics = ({ character }) => (
  <div className="flex flex-col justify-center flex-grow p-2 align-middle border-2 border-green-900 rounded-lg dark:border-gray-900 sm:mx-6">
    <Title className="mb-6 text-3xl">
      Characteristics
    </Title>
    <div className="grid items-center w-full grid-cols-2 px-2 text-center gap-x-5 gap-y-3">
      <p className="font-bold text-right">Name</p>
      <p className="text-left">{character.name}</p>
      <p className="font-bold text-right">Occupation</p>
      <p className="text-left">{character.occupation}</p>
      <p className="font-bold text-right">Status</p>
      <p className="text-left">{character.status}</p>
      <p className="font-bold text-right">Nickname</p>
      <p className="text-left">{character.nickname}</p>
      <p className="font-bold text-right">Potrayed By</p>
      <p className="text-left">{character.portrayed}</p>
      <p className="font-bold text-right">Category</p>
      <p className="text-left">{character.category}</p>
    </div>
  </div>
);

export default Characteristics;
