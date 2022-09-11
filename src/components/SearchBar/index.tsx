import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import Fuse from "fuse.js";
import pokemon from "pokemon";
import { FuseResult } from "types";
import SearchResults from "components/SearchResults";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPokemonData } from "reducers/pokemonDataReducer";

interface SearchBarProps {
  displaySearch: boolean;
}

const SearchBar = ({ displaySearch }: SearchBarProps) => {
  const fuse = new Fuse(pokemon.all(), {
    threshold: 0.4,
  });

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<string>>([]);

  const searchPokemon = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredQuery = event.target.value;
    const fuseResults = fuse.search(enteredQuery).slice(0, 5);
    setSearchResults(fuseResults.map((result: FuseResult) => result.item));
    setSearchQuery(enteredQuery);
  };

  const fetchPokemonData = useCallback(
    async (pokemonName: string) => {
      const pokemonId = pokemon.getId(pokemonName);

      setSearchQuery("");
      setSearchResults([]);

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );

      const name = pokemonName;
      const image = data.sprites.other["official-artwork"].front_default;
      const type = data.types.map((type: any) => type.type.name);
      const stats = data.stats.map((stat: any) => {
        return {
          statType: stat.stat.name,
          value: stat.base_stat,
          percentage: Math.floor((stat.base_stat / 300) * 100),
        };
      });

      dispatch(
        setPokemonData({
          id: pokemonId,
          name,
          image,
          type,
          stats,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    const randomPokemonName = pokemon.random();
    fetchPokemonData(randomPokemonName);
  }, [fetchPokemonData]);

  if (!displaySearch) return null;

  return (
    <div className="relative z-10">
      <input
        type="text"
        value={searchQuery}
        onChange={searchPokemon}
        placeholder="Pokèmon name"
        className="search-bar"
      />
      {!!searchResults.length && (
        <SearchResults
          results={searchResults}
          fetchPokemonData={fetchPokemonData}
        />
      )}
    </div>
  );
};

export default SearchBar;
