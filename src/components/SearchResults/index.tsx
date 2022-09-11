import { MouseEvent } from "react";
import { fetchPokemonData } from "utils";
import pokemon from "pokemon";
import { useDispatch } from "react-redux";
import { setPokemonData } from "reducers/pokemonDataReducer";

interface SearchResultsProps {
  results: Array<string>;
  resetSearch: () => void;
}

const SearchResults = ({ results, resetSearch }: SearchResultsProps) => {
  const dispatch = useDispatch();

  const searchResultClickHandler = async (event: MouseEvent<HTMLLIElement>) => {
    if (event.currentTarget.textContent) {
      const pokemonName: string = event.currentTarget.textContent;
      const pokemonId = pokemon.getId(pokemonName);
      const pokemonData = await fetchPokemonData(pokemonId);
      dispatch(setPokemonData(pokemonData));
      resetSearch();
    }
  };

  return (
    <div className="search-results">
      <ul>
        {results.map((pokemonName, idx) => (
          <li
            onClick={searchResultClickHandler}
            className="search-result"
            key={idx}
          >
            {pokemonName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
