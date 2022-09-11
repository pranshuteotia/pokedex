import { MouseEvent } from "react";

interface SearchResultsProps {
  results: Array<string>;
  fetchPokemonData: Function;
}

const SearchResults = ({ results, fetchPokemonData }: SearchResultsProps) => {
  const searchResultClickHandler = (event: MouseEvent<HTMLLIElement>) => {
    const pokemonName = event.currentTarget.textContent;
    fetchPokemonData(pokemonName);
  };

  return (
    <div className="search-results">
      <ul>
        {results.map((result, idx) => (
          <li
            onClick={searchResultClickHandler}
            className="search-result"
            key={idx}
            data-name={result}
          >
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
