import Title from '@/elements/title';

const Quotes = ({ character }) => (
  <div className="flex flex-col">
    <Title className="self-center mb-2 text-3xl">Quotes</Title>
    <ul className="space-y-3 list-none sm:pl-4 sm:list-disc sm:space-y-0">
      {character.quotes.map((quote) => (
        <div key={quote.id}>
          <li>
            {quote.quote}
          </li>
          <hr className="my-2 border-gray-400 sm:hidden" />
        </div>
      ))}
    </ul>
    { character.quotes.length === 0 && <p className="text-lg place-self-center">No Quotes</p> }
  </div>
);

export default Quotes;
