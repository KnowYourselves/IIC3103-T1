import Title from '@/elements/title';

import ListSeasons from './list-seasons';

const Series = ({ character }) => (
  <div className="flex flex-col items-center justify-center space-y-3">
    <Title className="text-3xl">Series</Title>
    <div className="flex flex-col space-y-5 sm:space-x-10 sm:space-y-0 sm:flex-row">
      <ListSeasons seasons={character.appearance} series="Breaking Bad" />
      <ListSeasons seasons={character.better_call_saul_appearance} series="Better Call Saul" />
    </div>
  </div>
);

export default Series;
