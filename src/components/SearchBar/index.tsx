import React, { ChangeEvent, useState } from "react";

import Fuse from "fuse.js";
import pokemon from "pokemon";
import { FuseResult } from "types";
import SearchResults from "components/SearchResults";

interface SearchBarProps {
  displaySearch: boolean;
}

const SearchBar = ({ displaySearch }: SearchBarProps) => {
  const fuse = new Fuse(pokemon.all(), {
    threshold: 0.4,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<string>>([]);

  const searchPokemon = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredQuery = event.target.value;
    const fuseResults = fuse.search(enteredQuery).slice(0, 5);
    setSearchResults(fuseResults.map((result: FuseResult) => result.item));
    setSearchQuery(enteredQuery);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

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
        <SearchResults results={searchResults} resetSearch={resetSearch} />
      )}
    </div>
  );
};

export default SearchBar;
